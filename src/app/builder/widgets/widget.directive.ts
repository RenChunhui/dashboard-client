import { Directive, ElementRef, Renderer2, AfterViewInit, HostListener } from "@angular/core";

@Directive({
  selector: '[ngWidget]'
})
export class WidgetDirective implements AfterViewInit {
  constructor(
    private _el:ElementRef,
    private _renderer: Renderer2
  ){}

  /**
   * @override
   */
  ngAfterViewInit() {
    this._renderer.addClass(this._el.nativeElement, 'highlight');
    this._renderer.setAttribute(this._el.nativeElement,'id',this.uuid());
  }

  /**
   * @private
   */
  @HostListener('mouseover', ['$event'])
  private onOver(event) {
    event.preventDefault();
    event.stopPropagation();

    this._renderer.addClass(this._el.nativeElement, 'drag-over');
  }

  /**
   * @private
   */
  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseout', ['$event'])
  private onOut(event) {
    event.preventDefault();
    event.stopPropagation();

    this._renderer.removeClass(this._el.nativeElement, 'drag-over');
  }

  private uuid():string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
