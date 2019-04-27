import { Directive, ElementRef, Renderer2, AfterViewInit, HostListener, OnInit, Input } from "@angular/core";
import { StageService } from '../stage/stage.service';
import { WidgetToolbar } from './widget-toolbar';
import { config } from 'rxjs';
import { WidgetConfig } from './widget.interface';

@Directive({
  selector: '[ngWidget]'
})
export class WidgetDirective implements OnInit,AfterViewInit {
  @Input() config: WidgetConfig;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _stageService: StageService,
  ) { }

  /**
   * @override
   */
  ngOnInit() {
    this._stageService.stageSubject.subscribe(observer => {
      if(observer === 'preview') {
        this._renderer.removeClass(this._el.nativeElement,'highlight');
      } else if(observer === 'edit') {
        this._renderer.addClass(this._el.nativeElement, 'highlight');
      }
    })
  }

  /**
   * @override
   */
  ngAfterViewInit() {
    if(this._stageService.mapStatus.stage === 'edit') {
      this._renderer.addClass(this._el.nativeElement, 'highlight');
      this._renderer.setAttribute(this._el.nativeElement, 'id', this.uuid());
    }
  }

  /**
   * @private
   */
  @HostListener('click', ['$event'])
  private onClick(event) {
    if(this._stageService.mapStatus.stage === 'preview') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    // send message
    this._stageService.configSubject.next(this.config);

    // remove over class
    this._renderer.removeClass(this._el.nativeElement, 'highlight-over');

    if (this._stageService.mapStatus.selectedId === this._el.nativeElement.id) {
      this._stageService.mapStatus.selectedId = '';
      this._renderer.removeClass(this._el.nativeElement, 'highlight-active');
      WidgetToolbar.removeChild();
    } else {
      if (this._stageService.mapStatus.selectedId !== '') {
        this._renderer.removeClass(document.getElementById(this._stageService.mapStatus.selectedId), 'highlight-active');
      }
      this._stageService.mapStatus.selectedId = this._el.nativeElement.id;
      this._renderer.addClass(this._el.nativeElement, 'highlight-active');
      WidgetToolbar.appendChild(this._renderer, this._el.nativeElement);
    }
  }

  /**
   * @private
   */
  @HostListener('mouseover', ['$event'])
  private onOver(event) {
    if(this._stageService.mapStatus.stage === 'preview') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if(this._stageService.mapStatus.selectedId !== this._el.nativeElement.id) {
      this._renderer.addClass(this._el.nativeElement, 'highlight-over');
    }
  }

  /**
   * @private
   */
  @HostListener('mouseleave', ['$event'])
  @HostListener('mouseout', ['$event'])
  private onOut(event) {
    if(this._stageService.mapStatus.stage === 'preview') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this._renderer.removeClass(this._el.nativeElement, 'highlight-over');
  }

  private uuid(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
