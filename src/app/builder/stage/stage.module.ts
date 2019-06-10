import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { StageService } from './stage.service';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule,
    WidgetsModule
  ],
  declarations: [
    StageComponent
  ],
  exports: [
    StageComponent
  ],
  providers: [
    StageService
  ],
  bootstrap: [
    StageComponent
  ]
})
export class StageModule { }
