import { Component, Input } from "@angular/core";
import { IConfig } from 'src/app/builder/interfaces/config.interface';
import { RendererEnum } from 'src/app/builder/enums/renderer.enum';

@Component({
  selector: '[ng-input]',
  templateUrl: 'input.component.html'
})
export class InputComponent {
  @Input() config: IConfig = {
    name: 'input',
    config: {
      propertys: {
        field: {
          renderer: RendererEnum.string,
          default: ''
        },
        label: {
          renderer: RendererEnum.string,
          default: 'label'
        },
        value: {
          renderer: RendererEnum.string,
          default: ''
        },
        placeholder: {
          renderer: RendererEnum.string,
          default: 'placeholder'
        }
      },
      styles: {
        labelWidth: {
          renderer: RendererEnum.string,
          default: '120px'
        },
        controlWidth: {
          renderer: RendererEnum.string,
          default: '100%'
        }
      }
    }
  };
}
