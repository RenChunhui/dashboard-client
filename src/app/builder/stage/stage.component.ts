import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren, QueryList, OnInit, ElementRef, Injector, Renderer2 } from "@angular/core";
import { ScopeEnum } from '../sidebar/enums/scope.enum';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { ContainerComponent } from '../widgets/components/container/container.component';
import { StageService } from './stage.service';
import { IWidgetGroupConfig } from '../sidebar/sidebar.interface';
import { NgDragDropService } from 'src/app/common/drag-drop/drag-drop.service';
import { WidgetEnum } from '../widgets/enums/widget.enum';

@Component({
  selector: '[app-stage]',
  templateUrl: 'stage.component.html'
})
export class StageComponent implements OnInit {
  @ViewChildren('container', { read: ViewContainerRef }) queryList: QueryList<ViewContainerRef>;
  @ViewChild('formNode', { static: false }) formNode: ElementRef;
  @ViewChild('placeholderNode', { static: false }) placeholderNode: ElementRef;

  /** 范围控制枚举 */
  public scopeEnum = ScopeEnum;
  /** 是否显示提示 */
  // public showHint: boolean = false;
  // 提示节点
  private _placeholderNode: any;

  constructor(
    public stageService: StageService,
    private _ngDragDropService: NgDragDropService,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector,
    private _renderer: Renderer2
  ) { }

  /** @override */
  ngOnInit() {
    this._ngDragDropService.onDragStart.subscribe(observer => {
      if (observer === null) return;
      if (this._ngDragDropService.dragData.scope === ScopeEnum.container) {
        this._insertPlaceholderNode();
      }
    })

    this._ngDragDropService.onDragEnd.subscribe(observer => {
      if (observer === null) return;
    })
  }

  public onDragOver(event) {
    if (this._placeholderNode === null) {
      this._insertPlaceholderNode();
    }

    if (event.target !== this.formNode.nativeElement) {
      let currentNode = event.target;

      while (currentNode.parentNode !== this.formNode.nativeElement && currentNode.parentNode) {
        currentNode = currentNode.parentNode;
      }

      if (currentNode.parentNode === this.formNode.nativeElement && currentNode !== this._placeholderNode) {
        const rect = (<HTMLElement>currentNode).getBoundingClientRect();
        const isFirstHalf = event.clientY < rect.top + rect.height / 2;
        this.formNode.nativeElement.insertBefore(this._placeholderNode, isFirstHalf ? currentNode : currentNode.nextSibling);
      }
    }
  }

  public onDragLeaveHandler(event) {
    const newTarget = document.elementFromPoint(event.clientX, event.clientY);
    const formNode = (<HTMLElement>this.formNode.nativeElement);

    if (!formNode.contains(newTarget)) {
      this._removePlaceholderNode();
    }
  }

  /**
   * 拖拽释放
   */
  public onDropHandler(event: DropEvent) {
    const dragData = event.dragData as IWidgetGroupConfig;

    // 限制只能是容器
    if (dragData.scope !== ScopeEnum.container) {
      return;
    }

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.stageService.getWidget(dragData.name));
    const componentRef = componentFactory.create(this._injector);

    const index = Array.prototype.indexOf.call(this.formNode.nativeElement.children, this._placeholderNode);
    console.log('index:', index);

    const formNode = (<HTMLElement>this.formNode.nativeElement);

    if (dragData.name === WidgetEnum.container) {
      (<ContainerComponent>componentRef.instance).placeholderNode = false;
      componentRef.hostView.detectChanges();
    }

    const oldChild = this._placeholderNode;
    formNode.replaceChild(componentRef.location.nativeElement, oldChild);
  }

  /**
   * 插入提示节点
   * @private
   */
  private _insertPlaceholderNode() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ContainerComponent);
    const componentRef = componentFactory.create(this._injector);
    const formNode = (<HTMLElement>this.formNode.nativeElement);
    const lastChild = formNode.lastChild;

    (<ContainerComponent>componentRef.instance).placeholderNode = true;
    componentRef.hostView.detectChanges();
    this._placeholderNode = componentRef.location.nativeElement;
    this._renderer.appendChild(formNode, this._placeholderNode);
    formNode.insertBefore(this._placeholderNode, lastChild);
  }

  /**
   * 移除提示节点
   * @private
   */
  private _removePlaceholderNode() {
    const formNode = (<HTMLElement>this.formNode.nativeElement);

    if (Array.prototype.indexOf.call(formNode.children, this._placeholderNode) !== -1) {
      formNode.removeChild(this._placeholderNode);
      this._placeholderNode = null;
    }
  }
}
