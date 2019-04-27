import { Component } from "@angular/core";
import { Widget } from '../widget';
import { WidgetConfig } from '../../widget.interface';

@Component({
  selector: '[ng-button]',
  templateUrl: 'button.component.html'
})
export class ButtonComponent extends Widget {
  public config:WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'name',
        rendererType: 'text',
        default: '按钮'
      }
    ],
    styles: [
      {
        key: 'background',
        rendererType: 'select',
        default: '',
        provider: [

        ]
      },
      {
        key: 'foreground',
        rendererType: 'select',
        default: '',
        provider: [

        ]
      }
    ]
  }
}
