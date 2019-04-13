import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule
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
