import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PanelComponent
  ],
  bootstrap: [
    PanelComponent
  ]
})
export class PanelModule { }
