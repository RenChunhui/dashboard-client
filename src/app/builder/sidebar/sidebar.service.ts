import { Injectable } from "@angular/core";
import { WidgetConfig } from './sidebar.interface';

@Injectable()
export class SidebarService {
  public widgetConfig: WidgetConfig[] = [
    {
      label: '布局容器',
      group: [
        { label: '容器', type: '', icon: 'iconlayout' }
      ]
    },
    {
      label: '基本组件',
      group: [
        { label: '标题', type: '', icon: 'iconbiaoti' },
        { label: '单行文本', type: '', icon: 'iconinput' },
        { label: '多行文本', type: '', icon: 'icontextarea1' },
        { label: '单选框', type: '', icon: 'iconcheck-circle' },
        { label: '多选框', type: '', icon: 'iconcheck-square' },
        { label: '下拉框', type: '', icon: 'icondown-square' },
        { label: '日期时间', type: '', icon: 'iconcalendar' },
        { label: '按钮', type: '', icon: 'iconanniu' }
      ]
    },
    {
      label: '高级组件',
      group: [
        { label: '附件', type: '', icon: 'iconplus-square' },
        { label: '表格', type: '', icon: 'icontable' },
        { label: 'HTML', type: '', icon: 'iconcode' },
      ]
    }
  ]
}
