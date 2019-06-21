import { Component, Input, ElementRef, AfterViewInit, OnInit, OnChanges, SimpleChanges, ViewChild, Inject, ViewContainerRef } from "@angular/core";
import { IConfig } from 'src/app/builder/interfaces/config.interface';
import { RendererEnum } from 'src/app/builder/enums/renderer.enum';
import { EventService } from 'src/app/builder/services/event.service';
import { ContainerDirective } from './container.directive';

@Component({
  selector: '[ng-container]',
  templateUrl: 'container.component.html'
})
export class ContainerComponent {
  @Input() index:number = -1;

  config: IConfig = {
    name: 'row',
    config: {
      propertys: {
        col: {
          renderer: RendererEnum.col
        }
      }
    }
  };

  constructor(
    private _el: ElementRef,
    private _eventService:EventService,
    // vc:ViewContainerRef,
    // @Inject('ng-container') container
  ) {
    // container.registerContainer(vc)
  }

}
