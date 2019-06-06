import { Directive, ElementRef, OnInit, Renderer2, AfterViewInit, Input } from "@angular/core";
import { NgDragDropService } from 'src/app/common/drag-drop/drag-drop.service';
import { Observable, of as observableOf } from 'rxjs';

@Directive({ selector: '[ngHighlight]' })
export class HighlightDirective implements OnInit, AfterViewInit {
  /**
   * 用于和 drag 匹配
   */
  @Input() dropScope: string | Array<string> = 'default';

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _ngDragDropService: NgDragDropService
  ) { }

  /** @override */
  ngOnInit() {
    this._ngDragDropService.onDragStart.subscribe(observer => {
      if(observer === null) return;

      this._allowDrop().subscribe(result => {
        if(result) {
          this._renderer.addClass(this._el.nativeElement, 'highlight-hint');
        }
      })
    })

    this._ngDragDropService.onDragEnd.subscribe(observer => {
      if (observer === null) return;

      this._renderer.removeClass(this._el.nativeElement, 'highlight-hint');
    })
  }

  /** @override */
  ngAfterViewInit() {
    // 设置 class
    this._renderer.addClass(this._el.nativeElement, 'w-100');
    this._renderer.addClass(this._el.nativeElement, 'h-100');
    this._renderer.addClass(this._el.nativeElement, 'position-absolute');
    this._renderer.addClass(this._el.nativeElement, 'highlight');

    // 设置 style
    this._renderer.setStyle(this._el.nativeElement, 'left', '0');
    this._renderer.setStyle(this._el.nativeElement, 'top', '0');
    this._renderer.setStyle(this._el.nativeElement,'pointer-events','none');
  }

  /**
   * @private
   */
  private _allowDrop(): Observable<boolean> {
    let allowed: boolean | Observable<boolean> = false;

    if (typeof this.dropScope === 'string' && typeof this._ngDragDropService.dragScope === 'string') {
      allowed = this._ngDragDropService.dragScope === this.dropScope;
    }
    return observableOf(allowed);
  }
}
