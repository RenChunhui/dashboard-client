export interface IWidgetConfig {
  /** 分组名称 */
  name: string;
  group: IWidgetGroupConfig[];
}

export interface IWidgetGroupConfig {
  /** 组件名 */
  name: string;
  /** 图标 */
  icon: string;
  /** 范围 */
  scope: string;
}
