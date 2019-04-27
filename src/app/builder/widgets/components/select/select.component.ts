import { Component } from "@angular/core";
import { WidgetConfig } from '../../widget.interface';
import { Widget } from '../widget';

@Component({
  selector: '[ng-select]',
  templateUrl: 'select.component.html'
})
export class SelectComponent extends Widget {
  public config: WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'label',
        rendererType: 'text',
        default: '下拉框'
      },
      {
        key: 'options',
        rendererType: 'radio',
        default: 'key0',
        provider: [
          { key: 'key0', value: '选项0' },
          { key: 'key1', value: '选项1' },
        ]
      }
    ]
  }
}
