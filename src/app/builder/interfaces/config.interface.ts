export interface IConfig {
  /** 组件名 */
  name: string;
  config?: {
    propertys?: any,
    styles?: any,
    events?: any,
    rules?: any
  };
}
