import { Directive, HostListener, Output, EventEmitter, ElementRef, OnDestroy, Input } from "@angular/core";
import { NgDragDropService } from '../drag-drop.service';

@Directive({ selector: '[ngDrag]' })
export class NgDragDirective implements OnDestroy {
  /**
   * 定义拖动数据
   */
  @Input() dragData: any;

  /**
   * 用户定义拖动范围
   */
  @Input() dragScope: string;

  /**
   * 定义拖动效果
   * `copy` 表明被拖动的数据将从它原本的位置拷贝到目标的位置
   * `move` 表明被拖动的数据将被移动
   * `link` 表明在拖动源位置和目标位置之间将会创建一些关系表格或是连接
   */
  @Input() effect: 'copy' | 'move' | 'link' = 'copy';

  /**
   * 开始拖拽
   */
  @Output() onDragStart: EventEmitter<any> = new EventEmitter();

  /**
   * 拖拽中
   */
  @Output() onDrag: EventEmitter<any> = new EventEmitter();

  /**
   * 拖拽结束
   */
  @Output() onDragEnd: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef,
    private ngDragDropService: NgDragDropService
  ) { }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener('dragstart', this.onDragStartHandler);
    this.el.nativeElement.removeEventListener('drag', this.onDragHandler);
    this.el.nativeElement.removeEventListener('dragend', this.onDragEndHandler);
  }

  /**
   * @private
   * @param event
   */
  @HostListener('dragstart', ['$event'])
  private onDragStartHandler(event) {
    event.stopPropagation();
    event.dataTransfer.dropEffect = this.effect;

    this.ngDragDropService.dragData = this.dragData;
    this.ngDragDropService.dragScope = this.dragScope;

    this.ngDragDropService.onDragStart.next(event);
    this.onDragStart.emit(event);
  }

  /**
   * @private
   * @param event
   */
  @HostListener('drag', ['$event'])
  private onDragHandler(event) {
    this.onDrag.emit(event);
  }

  /**
   * @private
   * @param event
   */
  @HostListener('dragend', ['$event'])
  private onDragEndHandler(event) {
    this.ngDragDropService.onDragEnd.next(event);
    this.onDragEnd.emit(event);
    event.stopPropagation();
    event.preventDefault();
  }
}
