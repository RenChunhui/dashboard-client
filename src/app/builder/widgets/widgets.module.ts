import { NgModule } from "@angular/core";
import { ContainerComponent } from './components/container/container.component';
import { InputComponent } from './components/input/input.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ActionDirective } from './directives/action.directive';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule
  ],
  declarations: [
    ContainerComponent,
    TabsComponent,
    InputComponent,
    HighlightDirective,
    ActionDirective
  ],
  entryComponents: [
    ContainerComponent,
    TabsComponent,
    InputComponent
  ],
  exports: [
    ContainerComponent,
    TabsComponent,
    InputComponent,
    HighlightDirective,
    ActionDirective
  ]
})
export class WidgetsModule { }
