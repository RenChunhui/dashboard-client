import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule,
    WidgetsModule
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [
    SidebarService,
    { provide: LOCALE_ID,useValue: 'zh-Hans'}
  ],
  exports: [
    SidebarComponent
  ],
  bootstrap: [
    SidebarComponent
  ]
})
export class SidebarModule { }
