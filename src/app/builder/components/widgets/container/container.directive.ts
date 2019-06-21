import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EventService } from 'src/app/builder/services/event.service';

@Directive({selector:'[ngContainer]'})
export class ContainerDirective implements OnInit {
  @Input() index:number = -1;
  @Output() onChange:EventEmitter<any> = new EventEmitter();

  constructor(
    private _el:ElementRef,
    private _eventService:EventService
  ){}

  ngOnInit(){
    this._eventService.renderSubject.subscribe(result => {
      if(result === null) return;
      this.index = parseInt((<HTMLElement>this._el.nativeElement).getAttribute('data-index'));
      if(this.index === NaN) return;
      this.onChange.emit(this.index);
    })
  }
}
