export class DropEvent {
  /**
   * 原生 `event`
   */
  nativeEvent: any;

  /**
   * 拖动的数据
   */
  dragData: any;

  constructor(event: any, data: any) {
      this.nativeEvent = event;
      this.dragData = data;
  }
}
