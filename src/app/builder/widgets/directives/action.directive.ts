import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({ selector: '[ngAction]' })
export class ActionDirective implements OnInit {
  // 鼠标经过的 class 名
  private _overClass:string = 'highlight-over';

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

  }

  /**
   * @private
   */
  @HostListener('mouseover',['$event'])
  private _onHoverHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const lastChild = this._el.nativeElement.lastChild;
    this._renderer.addClass(lastChild,this._overClass);
  }

  /**
   * @private
   */
  @HostListener('mouseleave',['$event'])
  @HostListener('mouseout',['$event'])
  private _onOutHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const lastChild = this._el.nativeElement.lastChild;
    this._renderer.removeClass(lastChild,this._overClass);
  }
}
