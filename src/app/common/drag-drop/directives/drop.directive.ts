import { Directive, Input, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({ selector: '[ngDrop]' })
export class NgDropDirective {
  /**
   * 定义拖动效果
   * `copy` 表明被拖动的数据将从它原本的位置拷贝到目标的位置
   * `move` 表明被拖动的数据将被移动
   * `link` 表明在拖动源位置和目标位置之间将会创建一些关系表格或是连接
   */
  @Input() effect: 'copy' | 'move' | 'link' = 'copy';

  /**
   * 抛出 `dragenter` 事件
   */
  @Output() onDragEnter: EventEmitter<any> = new EventEmitter();

  /**
   * 抛出 `dragover` 事件
   */
  @Output() onDragOver: EventEmitter<any> = new EventEmitter();

  /**
   * 抛出 `dragleave` 事件
   */
  @Output() onDragLeave: EventEmitter<any> = new EventEmitter();

  /**
   * 抛出 `drop` 事件
   */
  // @Output() onDrop: EventEmitter<DropEvent> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  private onDragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = this.effect;
    this.onDragOver.emit(event);
  }

  @HostListener('drop', ['$event'])
  private onDropHandler(event) {
    event.preventDefault();
  }
}
