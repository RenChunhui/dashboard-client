import { Component, Input } from "@angular/core";
import { WidgetConfig } from '../../widget.interface';
import { Widget } from '../widget';

@Component({
  selector: '[ng-input]',
  templateUrl: 'input.component.html'
})
export class InputComponent extends Widget {
  @Input() config:WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'label',
        rendererType: 'text',
        default: '单行文本'
      },
      {
        key: 'placeholder',
        rendererType: 'text',
        default: '请输入提示内容'
      }
    ]
  }
}
