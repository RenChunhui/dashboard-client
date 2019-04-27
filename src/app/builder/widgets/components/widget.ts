import { WidgetConfig } from "../widget.interface";
import { Input } from '@angular/core';

export class Widget {
  config:WidgetConfig;

  public uuid(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
