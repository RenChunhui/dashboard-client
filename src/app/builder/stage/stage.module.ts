import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageService } from './stage.service';

@NgModule({
  declarations: [StageComponent],
  imports: [
    CommonModule
  ],
  exports:[StageComponent],
  providers: [StageService],
  bootstrap: [StageComponent]
})
export class StageModule { }
