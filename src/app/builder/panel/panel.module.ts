import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule
  ],
  exports:[PanelComponent],
  bootstrap: [PanelComponent]
})
export class PanelModule { }
