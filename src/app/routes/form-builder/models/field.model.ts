export interface FieldModle {
  auth?: {
    /**
     * 必填
     */
    required?: boolean;

    /**
     * 查询
     */
    search?: boolean;

    /**
     * 可读(是否显示)
     */
    read?: boolean;

    /**
     * 可写(编辑)
     */
    write?: boolean;
  },

  props?: {
    [propName: string]: FieldPropertyModel
  };

  rule?: FieldRuleModle;

  /**
   * 样式
   */
  styles?: {

  },
}

/**
 * 属性
 */
interface FieldPropertyModel {
  /** 渲染类型 */
  readonly renderer?: 'string' | 'number' | 'radio';
  /** 默认值 */
  default?: unknown;
  /** 数据源 */
  provider?: { key: string, value: string; data?: unknown }[]
}

/**
 * 规则
 */
interface FieldRuleModle {
  /**
   * 最大值
   */
  max?: number;

  /**
   * 最小值
   */
  min?: number;

  /**
   * 最小长度
   */
  minLength?: number;

  /**
   * 最大长度
   */
  maxLength?: number;

  /**
   * 自定义规则
   */
  pattern?: string;
}
