import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageService } from './stage.service';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { WidgetModule } from '../widgets/widget.module';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule,
    WidgetModule.forRoot()
  ],
  declarations: [
    StageComponent,
  ],
  exports:[StageComponent],
  providers: [StageService],
  bootstrap: [StageComponent]
})
export class StageModule { }
