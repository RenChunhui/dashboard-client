import { Component, Input } from "@angular/core";
import { IConfig } from 'src/app/builder/interfaces/config.interface';
import { RendererEnum } from 'src/app/builder/enums/renderer.enum';

@Component({
  selector: '[ng-container]',
  templateUrl: 'container.component.html'
})
export class ContainerComponent {
  @Input() placeholderNode:boolean = false;

  rowConfig:IConfig = {
    name: 'row',
    config: {
      propertys: {
        col: {
          renderer: RendererEnum.col
        }
      }
    }
  };

  colConfig:IConfig = {
    name: 'col'
  }
}
