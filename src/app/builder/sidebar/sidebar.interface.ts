export interface SidebarConfig {
  /**
   * 组名称
   */
  readonly label:string;

  /**
   * 配置数据
   */
  readonly group: SidebarGroupConfig[];
}

export interface SidebarGroupConfig {
  /**
   * 组件名
   */
  readonly label:string;

  /**
   * 图标
   */
  readonly icon?:string;

  /**
   * 类型
   */
  readonly type: string;

  /**
   * 匹配
   */
  readonly scope: 'container' | 'widget';
}
