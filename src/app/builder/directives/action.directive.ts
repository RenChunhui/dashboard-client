import { Directive, OnInit, ElementRef, Renderer2, HostListener, AfterViewInit, Input } from "@angular/core";
import { uuid } from 'src/app/common/utils/uuid';
import { StageService } from '../services/stage.service';
import { IConfig } from '../interfaces/config.interface';

@Directive({ selector: '[ngAction]' })
export class ActionDirective implements OnInit,AfterViewInit {
  @Input() config:IConfig;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _service: StageService
  ) { }

  /** @override */
  ngOnInit() {

  }

  /** @override */
  ngAfterViewInit() {
    const currentNode = this._el.nativeElement;

    this._renderer.setAttribute(this._el.nativeElement,'id', uuid());
    this._renderer.setAttribute(currentNode.lastChild,'data-title', this.config.name);
  }

  /**
   * @private
   */
  @HostListener('mouseover',['$event'])
  private _onHoverHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const lastChild = this._el.nativeElement.lastChild;
    this._renderer.addClass(lastChild,'hover');
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
    this._renderer.removeClass(lastChild,'hover');
  }

  @HostListener('click',['$event'])
  private _onClickHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    if(this._service.status.selectedId === this._el.nativeElement.id) {
      this._service.status.selectedId = '';
      this._renderer.removeClass(this._el.nativeElement.lastChild, 'active');
      this._service.configSubject.next(null);
    } else {
      if(this._service.status.selectedId !== '') {
        const prevChild = document.getElementById(this._service.status.selectedId).lastChild;
        this._renderer.removeClass(prevChild,'active');
      }
    }

    this._service.status.selectedId = (<HTMLElement>this._el.nativeElement).id;
    this._renderer.addClass(this._el.nativeElement.lastChild, 'active');

    // send message
    this._service.configSubject.next(this.config);
  }

  /**
   * 禁用子节点鼠标事件
   */
  private _mouseDisabled(){

  }
}
