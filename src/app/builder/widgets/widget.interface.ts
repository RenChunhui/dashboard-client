export interface WidgetConfig {
  /**
   * 属性
   */
  propertys?:PropertyConfig[];

  /**
   * 样式
   */
  styles?:StyleConfig[];

  /**
   * 事件
   */
  events?:EventConfig[];

  /**
   * 验证
   */
  rules?:RuleConfig[];
}

export interface PropertyConfig {
  /**
   * 属性唯一关键字
   */
  key?: string;

  /**
   * 渲染类型
   */
  rendererType:string;

  /**
   * 默认值
   */
  default:any;

  /**
   * 数据源
   */
  provider?:any;
}

export interface StyleConfig {

}

export interface EventConfig {

}

export interface RuleConfig {

}
