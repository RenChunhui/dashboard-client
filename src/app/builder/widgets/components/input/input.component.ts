import { Component, Input } from "@angular/core";

@Component({
  selector: '[ng-input]',
  templateUrl: 'input.component.html'
})
export class InputComponent {
  @Input() config:any;
}
