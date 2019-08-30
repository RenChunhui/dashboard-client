import { ComponentType } from '../types/component.type';

export interface StoreOptions {
  /**
   * id
   */
  id: string;

  /**
   * 组件名称
   */
  name: ComponentType;

  /**
   * 显示名称
   */
  displayName: string;

  /**
   * 宽度值
   */
  width: string;

  /**
   * 属性
   */
  attribute: any;

  /**
   * 样式
   */
  styles: any;

  /**
   * 事件
   */
  events: any;

  /**
   * 验证规则
   */
  rules: any;
}
