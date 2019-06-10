import { Directive, OnInit, ElementRef, Renderer2, HostListener, AfterViewInit } from "@angular/core";
import { uuid } from 'src/app/common/utils/uuid';

@Directive({ selector: '[ngAction]' })
export class ActionDirective implements OnInit,AfterViewInit {
  // 鼠标经过的 class 名
  private _overClass:string = 'highlight-over';

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  /** @override */
  ngOnInit() {

  }

  /** @override */
  ngAfterViewInit() {
    const currentNode = this._el.nativeElement;

    this._renderer.setAttribute(this._el.nativeElement,'id', uuid());
    this._renderer.setAttribute(currentNode.lastChild,'data-title','Title');
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

  /**
   * 禁用子节点鼠标事件
   */
  private _mouseDisabled(){

  }
}
