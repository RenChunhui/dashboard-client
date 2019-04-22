import { WidgetConfig } from "../widget.interface";
import { Input } from '@angular/core';

export class Widget {
  @Input() config:WidgetConfig;
}
