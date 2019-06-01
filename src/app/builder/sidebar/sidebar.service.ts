import { Injectable } from "@angular/core";

@Injectable()
export class SidebarService {
  /**
   * 组件配置
   */
  public widgetConfig = [
    {
      name: '布局',
      group: [
        { name: '容器', type: 'container'}
      ]
    },
    {
      name: '基础组件',
      group: [
        { name: '标题' ,type: 'label'},
        { name: '输入框', type: 'input'},
        { name: '文本框', type: 'textarea'},
        { name: '单选框', type: 'radio'},
        { name: '多选框', type: 'checkbox'},
        { name: '下拉框', type: 'select'}
      ]
    }
  ]
}
