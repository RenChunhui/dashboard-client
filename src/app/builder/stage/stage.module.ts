import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageService } from './stage.service';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';

@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule,
    NgDragDropModule
  ],
  exports:[StageComponent],
  providers: [StageService],
  bootstrap: [StageComponent]
})
export class StageModule { }
