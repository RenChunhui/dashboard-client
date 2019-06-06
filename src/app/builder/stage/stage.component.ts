import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren, QueryList, OnInit, ElementRef } from "@angular/core";
import { ScopeEnum } from '../sidebar/enums/scope.enum';
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { ContainerComponent } from '../widgets/components/container/container.component';
import { StageService } from './stage.service';
import { IWidgetGroupConfig } from '../sidebar/sidebar.interface';
import { DomUtil } from 'src/app/common/utils/dom-util';
import { NgDragDropService } from 'src/app/common/drag-drop/drag-drop.service';

@Component({
  selector: '[app-stage]',
  templateUrl: 'stage.component.html'
})
export class StageComponent implements OnInit {
  @ViewChildren('container', { read: ViewContainerRef }) queryList: QueryList<ViewContainerRef>;
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
      this.showHint = true;
    })

    this._ngDragDropService.onDragEnd.subscribe(observer => {
      if (observer === null) return;
      this.showHint = false;
    })
  }

  public onDragOver(event) {
    const currentNode = event.target;
    console.log('event:', event.dataTransfer.types);
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
    const index = this.stageService.store.length - 1;

    this.queryList.changes.subscribe(() => {
      this.queryList.toArray()[index].clear();
      this.queryList.toArray()[index].createComponent(componentFactory);
    })
  }
}
