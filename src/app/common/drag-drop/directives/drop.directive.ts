import { Directive, Input, HostListener, Output, EventEmitter, ElementRef, Renderer2, OnInit, OnDestroy } from "@angular/core";
import { DropEvent } from '../drop-event';
import { NgDragDropService } from '../drag-drop.service';
import { of as observableOf, Observable } from 'rxjs';

@Directive({ selector: '[ngDrop]' })
export class NgDropDirective implements OnInit, OnDestroy {
  /**
   * 定义拖动效果
   * `copy` 表明被拖动的数据将从它原本的位置拷贝到目标的位置
   * `move` 表明被拖动的数据将被移动
   * `link` 表明在拖动源位置和目标位置之间将会创建一些关系表格或是连接
   */
  @Input() effect: 'copy' | 'move' | 'link' = 'copy';

  /**
   * 用于和 drag 匹配
   */
  @Input() dropScope: string | Array<string> = 'default';

  /**
   * `dragover` 事件时的效果,一般为边框高亮
   */
  @Input() dragOverClass: string = 'drag-over';

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
  @Output() onDrop: EventEmitter<DropEvent> = new EventEmitter();

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _dragDropService: NgDragDropService
  ) { }

  /**
   * @override
   */
  ngOnInit() {

  }

  /**
   * @override
   */
  ngOnDestroy() {
    this._el.nativeElement.removeEventListener('dragover', this.onDragOverHandler);
    this._el.nativeElement.removeEventListener('drop', this.onDropHandler);
    this._el.nativeElement.removeEventListener('dragleave', this.onDragLeaveHandler);
  }

  /**
   * `dragover` event handler
   * @param event
   */
  @HostListener('dragover', ['$event'])
  private onDragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = this.effect;
    this._renderer.addClass(this._el.nativeElement, this.dragOverClass);
    this.onDragOver.emit(event);
  }

  /**
   * `dragleave` event handler
   * @param event
   */
  @HostListener('dragleave', ['$event'])
  private onDragLeaveHandler(event) {
    this._renderer.removeClass(this._el.nativeElement, this.dragOverClass);
  }

  /**
   * `drop` event handler
   * @param event
   */
  @HostListener('drop', ['$event'])
  private onDropHandler(event) {
    this.allowDrop().subscribe(result => {
      if (result) {
        event.preventDefault();
        event.stopPropagation();

        this._renderer.removeClass(this._el.nativeElement, this.dragOverClass);

        this._dragDropService.onDragEnd.next(event);
        this.onDrop.emit(new DropEvent(event, this._dragDropService.dragData));
        this._dragDropService.dragData = null;
      }
    })
  }

  private allowDrop(): Observable<boolean> {
    let allowed: boolean | Observable<boolean> = false;

    if (typeof this.dropScope === 'string' && typeof this._dragDropService.dragScope === 'string') {
      allowed = this._dragDropService.dragScope === this.dropScope;
    }
    return observableOf(allowed);
  }
}
