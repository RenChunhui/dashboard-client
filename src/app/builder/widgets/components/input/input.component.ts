import { Component, Input } from "@angular/core";
import { WidgetConfig } from '../../widget.interface';

@Component({
  selector: '[ng-input]',
  templateUrl: 'input.component.html'
})
export class InputComponent {
  @Input() config:WidgetConfig = {
    propertys: [
      {
        key: 'label',
        rendererType: 'text',
        default: ''
      },
      {
        key: 'placeholder',
        rendererType: 'text',
        default: ''
      }
    ]
  }
}
