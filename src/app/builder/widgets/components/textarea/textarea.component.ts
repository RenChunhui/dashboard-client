import { Component } from "@angular/core";
import { WidgetConfig } from '../../widget.interface';
import { Widget } from '../widget';

@Component({
  selector: '[ng-textarea]',
  templateUrl: 'textarea.component.html'
})
export class TextareaComponent extends Widget {
  public config:WidgetConfig = {
    id: this.uuid(),
    propertys: [
      {
        key: 'label',
        rendererType: 'text',
        default: '多行文本'
      },
      {
        key: 'placeholder',
        rendererType: 'text',
        default: '请输入提示内容'
      }
    ]
  }
}
