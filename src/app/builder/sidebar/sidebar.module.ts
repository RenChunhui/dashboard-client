import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [
    SidebarService
  ],
  exports:[
    SidebarComponent
  ],
  bootstrap:[
    SidebarComponent
  ]
})
export class SidebarModule { }
