import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren, QueryList, OnInit, ElementRef, Injector } from "@angular/core";
import { ScopeEnum } from '../sidebar/enums/scope.enum';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { ContainerComponent } from '../widgets/components/container/container.component';
import { StageService } from './stage.service';
import { IWidgetGroupConfig } from '../sidebar/sidebar.interface';
import { NgDragDropService } from 'src/app/common/drag-drop/drag-drop.service';

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
  public showHint: boolean = false;

  constructor(
    public stageService: StageService,
    private _ngDragDropService: NgDragDropService,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  /** @override */
  ngOnInit() {
    this._ngDragDropService.onDragStart.subscribe(observer => {
      if (observer === null) return;
      if (this._ngDragDropService.dragData.scope === ScopeEnum.container) {
        this.showHint = true;
      }
    })

    this._ngDragDropService.onDragEnd.subscribe(observer => {
      if (observer === null) return;
      this.showHint = false;
    })
  }

  public onDragOver(event) {
    if (event.target !== this.formNode.nativeElement) {
      let currentNode = event.target;

      while (currentNode.parentNode !== this.formNode.nativeElement && currentNode.parentNode) {
        currentNode = currentNode.parentNode;
      }

      if (currentNode.parentNode === this.formNode.nativeElement && currentNode !== this.placeholderNode.nativeElement) {
        const rect = (<HTMLElement>currentNode).getBoundingClientRect();
        const isFirstHalf = event.clientY < rect.top + rect.height / 2;
        this.formNode.nativeElement.insertBefore(this.placeholderNode.nativeElement, isFirstHalf ? currentNode : currentNode.nextSibling);
      }
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

    this.stageService.store.push(null);
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.stageService.getWidget(dragData.name));
    const index = Array.prototype.indexOf.call(this.formNode.nativeElement.children, this.placeholderNode.nativeElement);

    this.queryList.changes.subscribe(() => {
      this.queryList.toArray()[index].clear();
      this.queryList.toArray()[index].createComponent(componentFactory);
    })
  }
}
