import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';

@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule
  ],
  exports:[StageComponent],
  bootstrap: [StageComponent]
})
export class StageModule { }
