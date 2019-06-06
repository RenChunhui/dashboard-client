import { NgModule } from "@angular/core";
import { NgDragDirective } from './directives/drag.directive';
import { NgDropDirective } from './directives/drop.directive';
import { NgDragDropService } from './drag-drop.service';

@NgModule({
  declarations: [
    NgDragDirective,
    NgDropDirective
  ],
  providers: [
    NgDragDropService
  ],
  exports: [
    NgDragDirective,
    NgDropDirective
  ]
})
export class NgDragDropModule {}
