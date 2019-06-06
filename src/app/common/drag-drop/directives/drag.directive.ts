import { Directive, HostListener, Output, EventEmitter, ElementRef, OnDestroy, Input, OnInit, HostBinding, AfterViewInit, Renderer2 } from "@angular/core";
import { NgDragDropService } from '../drag-drop.service';

@Directive({
  selector: '[ngDrag]'
})
export class NgDragDirective implements AfterViewInit,OnDestroy {
  /**
   * 定义拖动数据
   */
  @Input() dragData: any;

  /**
   * 用户定义拖动范围
   */
  @Input() dragScope: string | Array<string> = 'default';

  /**
   * 拖拽时的样式
   */
  @Input() dragHandleClass = 'drag-handle';

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
    private _el: ElementRef,
    private _renderer:Renderer2,
    private _ngDragDropService: NgDragDropService
  ) { }

  ngAfterViewInit() {
    this._renderer.addClass(this._el.nativeElement,this.dragHandleClass);
  }

  ngOnDestroy() {
    this._el.nativeElement.removeEventListener('dragstart', this.onDragStartHandler);
    this._el.nativeElement.removeEventListener('drag', this.onDragHandler);
    this._el.nativeElement.removeEventListener('dragend', this.onDragEndHandler);
  }

  /**
   * 启动拖动属性
   */
  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  /**
   * @private
   * @param event
   */
  @HostListener('dragstart', ['$event'])
  private onDragStartHandler(event) {

    event.stopPropagation();
    event.dataTransfer.dropEffect = this.effect;

    this._ngDragDropService.dragData = this.dragData;
    this._ngDragDropService.dragScope = this.dragScope;

    this._ngDragDropService.onDragStart.next(event);
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
    this._ngDragDropService.onDragEnd.next(event);
    this.onDragEnd.emit(event);
    event.stopPropagation();
    event.preventDefault();
  }
}
