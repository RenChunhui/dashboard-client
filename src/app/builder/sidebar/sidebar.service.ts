import { Injectable } from "@angular/core";
import { WidgetConfig } from './sidebar.interface';

@Injectable()
export class SidebarService {
  public widgetConfig: WidgetConfig[] = [
    {
      label: '布局容器',
      group: [
        { label: '容器', type: 'box', icon: 'iconlayout' }
      ]
    },
    {
      label: '基本组件',
      group: [
        { label: '标题', type: 'label', icon: 'iconbiaoti' },
        { label: '单行文本', type: 'input', icon: 'iconinput' },
        { label: '多行文本', type: 'textarea', icon: 'icontextarea1' },
        { label: '单选框', type: 'radio', icon: 'iconcheck-circle' },
        { label: '多选框', type: 'checkbox', icon: 'iconcheck-square' },
        { label: '下拉框', type: 'select', icon: 'icondown-square' },
        { label: '日期时间', type: 'datetime', icon: 'iconcalendar' },
        { label: '按钮', type: 'button', icon: 'iconanniu' }
      ]
    },
    {
      label: '高级组件',
      group: [
        { label: '附件', type: 'file', icon: 'iconplus-square' },
        { label: '表格', type: 'table', icon: 'icontable' },
        { label: 'HTML', type: 'html', icon: 'iconcode' },
      ]
    }
  ]
}
