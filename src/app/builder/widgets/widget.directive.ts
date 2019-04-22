import { Directive, ElementRef, Renderer2, AfterViewInit, HostListener } from "@angular/core";
import { StageService } from '../stage/stage.service';
import { WidgetToolbar } from './widget-toolbar';

@Directive({
  selector: '[ngWidget]'
})
export class WidgetDirective implements AfterViewInit {
  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _stageService: StageService,
  ) { }

  /**
   * @override
   */
  ngAfterViewInit() {
    this._renderer.addClass(this._el.nativeElement, 'highlight');
    this._renderer.setAttribute(this._el.nativeElement, 'id', this.uuid());
  }

  /**
   * @private
   */
  @HostListener('click', ['$event'])
  private onClick(event) {
    event.preventDefault();
    event.stopPropagation();

    // remove over class
    this._renderer.removeClass(this._el.nativeElement, 'highlight-over');

    // add toolbar
    WidgetToolbar.appendChild(this._renderer,this._el.nativeElement);

    if(this._stageService.mapStatus.selectedId === this._el.nativeElement.id) {
      this._stageService.mapStatus.selectedId = '';
    } else {
      if(this._stageService.mapStatus.selectedId !== '') {
        this._renderer.removeClass(document.getElementById(this._stageService.mapStatus.selectedId),'highlight-active');
      }
      this._stageService.mapStatus.selectedId = this._el.nativeElement.id;
      const element = document.getElementById(this._stageService.mapStatus.selectedId);
      this._renderer.addClass(element,'highlight-active');
    }
  }

  /**
   * @private
   */
  @HostListener('mouseover', ['$event'])
  private onOver(event) {
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
    event.preventDefault();
    event.stopPropagation();

    this._renderer.removeClass(this._el.nativeElement, 'highlight-over');
  }

  private uuid(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
