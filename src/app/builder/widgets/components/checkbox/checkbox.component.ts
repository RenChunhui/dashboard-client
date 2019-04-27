import { Component } from "@angular/core";
import { WidgetConfig } from '../../widget.interface';
import { Widget } from '../widget';

@Component({
  selector: '[ng-checkbox]',
  templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent extends Widget {
  public config: WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'label',
        rendererType: 'text',
        default: '单选框'
      },
      {
        key: 'options',
        rendererType: 'checkbox',
        default: ['key0'],
        provider: [
          { key: 'key0', value: '选项1', data: true },
          { key: 'key1', value: '选项2', data: false },
          { key: 'key2', value: '选项3', data: false }
        ]
      }
    ]
  }
}
