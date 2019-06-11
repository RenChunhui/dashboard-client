import { Injectable } from "@angular/core";
import { ScopeEnum } from '../enums/scope.enum';
import { WidgetEnum } from '../enums/widget.enum';
import { IWidgetConfig } from '../interfaces/widget.interface';

@Injectable()
export class SidebarService {
  /**
   * 组件配置
   */
  public widgetConfig:IWidgetConfig[] = [
    {
      name: 'layout',
      group: [
        { name: WidgetEnum.container,  icon: '', scope: ScopeEnum.container },
        { name: WidgetEnum.tabs, icon: '', scope: ScopeEnum.container }
      ]
    },
    {
      name: 'base component',
      group: [
        { name: 'label',    icon: '', scope: ScopeEnum.widget },
        { name: 'input',    icon: '', scope: ScopeEnum.widget },
        { name: 'textarea', icon: '', scope: ScopeEnum.widget },
        { name: 'radio',    icon: '', scope: ScopeEnum.widget },
        { name: 'checkbox', icon: '', scope: ScopeEnum.widget },
        { name: 'select',   icon: '', scope: ScopeEnum.widget }
      ]
    }
  ]
}
