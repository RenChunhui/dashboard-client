import { Injectable } from "@angular/core";
import { SidebarConfig } from './sidebar.interface';
import { WidgetEnum } from './sidebar.enum';

@Injectable()
export class SidebarService {
  public widgetConfig: SidebarConfig[] = [
    {
      label: 'group.layout',
      group: [
        { label: 'layout.container', type: WidgetEnum.container, icon: 'iconlayout', scope: 'container' }
      ]
    },
    {
      label: 'group.base',
      group: [
        { label: 'base.label', type: WidgetEnum.label, icon: 'iconbiaoti', scope: 'widget' },
        { label: 'base.input', type: WidgetEnum.input, icon: 'iconinput', scope: 'widget' },
        { label: 'base.textarea', type: WidgetEnum.textarea, icon: 'icontextarea1', scope: 'widget' },
        { label: 'base.radio', type: WidgetEnum.radio, icon: 'iconcheck-circle', scope: 'widget' },
        { label: 'base.checkbox', type: WidgetEnum.checkbox, icon: 'iconcheck-square', scope: 'widget' },
        { label: 'base.select', type: WidgetEnum.select, icon: 'icondown-square', scope: 'widget' },
        { label: 'base.datetime', type: WidgetEnum.datetime, icon: 'iconcalendar', scope: 'widget' },
        { label: 'base.button', type: WidgetEnum.button, icon: 'iconanniu', scope: 'widget' }
      ]
    },
    {
      label: 'group.complex',
      group: [
        { label: 'complex.file', type: WidgetEnum.file, icon: 'iconplus-square', scope: 'widget' },
        { label: 'complex.table', type: WidgetEnum.table, icon: 'icontable', scope: 'widget' },
      ]
    }
  ]
}
