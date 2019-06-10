import { Component, Input } from "@angular/core";

@Component({
  selector: '[ng-container]',
  templateUrl: 'container.component.html'
})
export class ContainerComponent {
  @Input() placeholderNode:boolean = false;
}
