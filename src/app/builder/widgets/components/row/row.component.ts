import { Component, ViewChildren, ViewContainerRef, ComponentFactoryResolver, QueryList } from "@angular/core";
import { DropEvent } from 'src/app/common/drag-drop/drop-event';
import { WidgetService } from '../../widget.service';

@Component({
  selector: '[ng-row]',
  templateUrl: 'row.component.html'
})
export class RowComponent {
  @ViewChildren('widgetView', { read: ViewContainerRef }) widgetList: QueryList<ViewContainerRef>;

  public list:any[] = [null];

  constructor(
    private _componentFactoryResolver:ComponentFactoryResolver,
    private _widgetService:WidgetService
  ) { }

  public onDropHandler(event:DropEvent,index:number) {
    // this.list.push(null);
    console.log('index:',index);
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this._widgetService.widgetMap[event.dragData]);
    this.widgetList.toArray()[index].clear();
    this.widgetList.toArray()[index].createComponent(componentFactory);
  }
}
