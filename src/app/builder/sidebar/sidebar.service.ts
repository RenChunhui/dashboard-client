import { Injectable } from "@angular/core";
import { WidgetConfig } from './sidebar.interface';
import { WidgetEnum } from './sidebar.enum';

@Injectable()
export class SidebarService {
  public widgetConfig: WidgetConfig[] = [
    {
      label: 'layout container',
      group: [
        { label: 'container', type: WidgetEnum.container, icon: 'iconlayout', scope: 'container' }
      ]
    },
    {
      label: 'base component',
      group: [
        { label: 'label', type: WidgetEnum.label, icon: 'iconbiaoti', scope: 'widget' },
        { label: 'input', type: WidgetEnum.input, icon: 'iconinput', scope: 'widget' },
        { label: 'textarea', type: WidgetEnum.textarea, icon: 'icontextarea1', scope: 'widget' },
        { label: 'radio', type: WidgetEnum.radio, icon: 'iconcheck-circle', scope: 'widget' },
        { label: 'checkbox', type: WidgetEnum.checkbox, icon: 'iconcheck-square', scope: 'widget' },
        { label: 'dropdown', type: WidgetEnum.dropdown, icon: 'icondown-square', scope: 'widget' },
        { label: 'datetime', type: WidgetEnum.datetime, icon: 'iconcalendar', scope: 'widget' },
        { label: 'button', type: WidgetEnum.button, icon: 'iconanniu', scope: 'widget' }
      ]
    },
    {
      label: 'complex component',
      group: [
        { label: 'file', type: WidgetEnum.file, icon: 'iconplus-square', scope: 'widget' },
        { label: 'table', type: WidgetEnum.table, icon: 'icontable', scope: 'widget' },
        { label: 'html', type: WidgetEnum.html, icon: 'iconcode', scope: 'widget' },
      ]
    }
  ]
}
