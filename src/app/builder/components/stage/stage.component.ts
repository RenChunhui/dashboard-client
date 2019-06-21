import { Component, ComponentFactoryResolver, ViewChild, OnInit, ElementRef, Injector, Renderer2, ViewChildren, QueryList, ContentChildren, ViewContainerRef } from "@angular/core";
import { ScopeEnum } from '../../enums/scope.enum';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { StageService } from '../../services/stage.service';
import { NgDragDropService } from 'src/app/common/drag-drop/drag-drop.service';
import { WidgetEnum } from '../../enums/widget.enum';
import { IWidgetGroupConfig } from '../../interfaces/widget.interface';
import { IConfig } from '../../interfaces/config.interface';
import { PlaceholderComponent } from '../widgets/placeholder/placeholder.component';
import { EventService } from '../../services/event.service';
import { ContainerComponent } from '../widgets/container/container.component';

@Component({
  selector: '[app-stage]',
  templateUrl: 'stage.component.html'
})
export class StageComponent implements OnInit {
  @ViewChildren(ContainerComponent) vcList:QueryList<ContainerComponent>;
  @ViewChild('vc', { read: ViewContainerRef, static: false }) vc: ViewContainerRef;
  @ViewChild('formNode', { static: false }) formNode: ElementRef;

  /** 范围控制枚举 */
  public scopeEnum = ScopeEnum;

  public globalConfig: IConfig = {
    name: 'Page'
  }

  // 提示节点
  private _placeholderNode: any;

  constructor(
    public stageService: StageService,
    private _eventService: EventService,
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

    const placeholderIndex = Array.prototype.indexOf.call(this.formNode.nativeElement.children, this._placeholderNode);
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.stageService.getWidget(dragData.name));
    const componentRef = componentFactory.create(this._injector);

    (<ContainerComponent>componentRef.instance).index = placeholderIndex;
    this.vc.insert(componentRef.hostView,placeholderIndex);

    this._removePlaceholderNode();

    return;
    // const componentRef = componentFactory.create(this._injector);
    // const index = Array.prototype.indexOf.call(this.formNode.nativeElement.children, this._placeholderNode);
    // const formNode = (<HTMLElement>this.formNode.nativeElement);

    // if (dragData.name === WidgetEnum.container) {
    //   componentRef.hostView.detectChanges();
    // }

    // const oldChild = this._placeholderNode;
    // const newChild = componentRef.location.nativeElement.firstChild;
    // formNode.replaceChild(newChild, oldChild);

    // this._resetNodes();
    // this._eventService.renderSubject.next(-1);
  }

  /**
   * 插入提示节点
   * @private
   */
  private _insertPlaceholderNode() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(PlaceholderComponent);
    const componentRef = componentFactory.create(this._injector);
    const formNode = (<HTMLElement>this.formNode.nativeElement);
    const lastChild = formNode.lastChild;

    this._placeholderNode = componentRef.location.nativeElement.firstChild;
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

  /**
   * 刷新节点
   */
  private _resetNodes() {
    const nodes = (<HTMLElement>this.formNode.nativeElement).childNodes;
    nodes.forEach((item, index) => {
      this._renderer.setAttribute(item, 'data-index', index.toString());
    })
  }
}
