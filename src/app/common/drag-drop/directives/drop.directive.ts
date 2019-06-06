import { Directive, Input, HostListener, Output, EventEmitter, ElementRef, Renderer2, OnInit, OnDestroy, NgZone } from "@angular/core";
import { DropEvent } from '../drop-event';
import { NgDragDropService } from '../drag-drop.service';
import { of as observableOf, Observable, Subscribable, Subscription } from 'rxjs';

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
   * 拖拽提示样式
   */
  @Input() dragHintClass:string = 'drag-hint';

  /**
   * `dragover` 事件时的效果,一般为边框高亮
   */
  @Input() dragOverClass: string = 'drag-over';

  @Input() set dropEnabled(value: boolean) {
    this._dropEnabled = value;
  }

  get dropEnabled(): boolean {
    return this._dropEnabled;
  }

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

  /**
   * @private
   */
  private _dropEnabled: boolean = true;

  /**
   * @private
   * 用于跟踪服务是否订阅,避免创建多个服务订阅
   */
  private _isServiceActive: boolean = false;

  /**
   * @private
   * 跟踪拖动状态
   */
  private _isDragActive: boolean = false;

  /**
   * @private
   */
  private _unbindDragEnterListener: Function;

  /**
   * @private
   */
  private _unbindDragOverListener: Function;

  /**
   * @private
   */
  private _unbindDragLeaveListener: Function;

  /**
   * @private
   */
  private _dragStartSubscription: Subscription;

  /**
   * @private
   */
  private _dragEndSubscription: Subscription;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _zone: NgZone,
    private _dragDropService: NgDragDropService
  ) { }

  /**
   * @override
   */
  ngOnInit() {
    if (this.dropEnabled) {
      this.subscribeService();
    }
  }

  /**
   * @override
   */
  ngOnDestroy() {
    this.unsubscribeService();
    this.unbindDragListeners();
  }

  /**
   * `dragover` event handler
   * @param event
   */
  private onDragOverHandler(event, result) {
    if (result) {
      event.preventDefault();
      this._renderer.addClass(this._el.nativeElement, this.dragOverClass);
      this.onDragOver.emit(event);
    }
  }

  /**
   * `dragleave` event handler
   * @param event
   */
  private onDragLeaveHandler(event) {
    this._renderer.removeClass(this._el.nativeElement, this.dragOverClass);
    event.preventDefault();
    this.onDragLeave.emit(event);
  }

  /**
   * 当拖动元素或选中的文本到一个可释放目标时触发
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets
   * @param event
   */
  private onDragEnterHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.onDragEnter.emit(event);
  }

  /**
   * `drop` event handler
   * @param event
   */
  @HostListener('drop', ['$event'])
  private onDropHandler(event) {
    this.allowDrop().subscribe(result => {
      if (result && this._isDragActive) {
        event.preventDefault();
        event.stopPropagation();

        this._renderer.removeClass(this._el.nativeElement, this.dragOverClass);

        this._dragDropService.onDragEnd.next(event);
        this.onDrop.emit(new DropEvent(event, this._dragDropService.dragData));
        this._dragDropService.dragData = null;
        this._dragDropService.dragScope = null;
      }
    })
  }

  /**
   * @private
   */
  private allowDrop(): Observable<boolean> {
    let allowed: boolean | Observable<boolean> = false;

    if (typeof this.dropScope === 'string' && typeof this._dragDropService.dragScope === 'string') {
      allowed = this._dragDropService.dragScope === this.dropScope;
    }
    return observableOf(allowed && this.dropEnabled);
  }

  /**
   * @private
   */
  private subscribeService() {
    if (this._isServiceActive === true) {
      return;
    }

    this._isServiceActive = true;

    this._dragStartSubscription = this._dragDropService.onDragStart.subscribe(() => {
      this._isDragActive = true;

      this.allowDrop().subscribe(result => {
        if (result && this._isDragActive) {
          this._renderer.addClass(this._el.nativeElement, this.dragHintClass);

          this._zone.runOutsideAngular(() => {
            this._unbindDragEnterListener = this._renderer.listen(this._el.nativeElement, 'dragenter', (dragEvent) => {
              this.onDragEnterHandler(dragEvent);
            });

            this._unbindDragOverListener = this._renderer.listen(this._el.nativeElement, 'dragover', (dragEvent) => {
              this.onDragOverHandler(dragEvent, result);
            });

            this._unbindDragLeaveListener = this._renderer.listen(this._el.nativeElement, 'dragleave', (dragEvent) => {
              this.onDragLeaveHandler(dragEvent);
            })
          })
        }
      })
    })

    this._dragEndSubscription = this._dragDropService.onDragEnd.subscribe(result => {
      if (result === null) {
        return;
      }

      this._isDragActive = false;
      this._renderer.removeClass(this._el.nativeElement,this.dragHintClass);
      this.unbindDragListeners();
    })
  }

  /**
   * @private
   */
  private unsubscribeService() {
    this._isServiceActive = false;

    if (this._dragStartSubscription) {
      this._dragStartSubscription.unsubscribe();
    }

    if (this._dragEndSubscription) {
      this._dragEndSubscription.unsubscribe();
    }
  }

  /**
   * @private
   */
  private unbindDragListeners() {
    if (this._unbindDragEnterListener) {
      this._unbindDragEnterListener();
    }

    if (this._unbindDragOverListener) {
      this._unbindDragOverListener();
    }

    if (this._unbindDragLeaveListener) {
      this._unbindDragLeaveListener();
    }
  }
}
