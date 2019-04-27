import { Component, Input } from "@angular/core";
import { Widget } from '../widget';
import { WidgetConfig } from '../../widget.interface';

@Component({
  selector: '[ng-label]',
  templateUrl: 'label.component.html'
})
export class LabelComponent extends Widget {
  @Input() config: WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'title',
        rendererType: 'text',
        default: ''
      }
    ]
  }
}
