import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { PanelComponent } from './components/panel/panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StageComponent } from './components/stage/stage.component';
import { NgDragDropModule } from '../common/drag-drop/drag-drop.module';
import { SidebarService } from './services/sidebar.service';
import { StageService } from './services/stage.service';
import { ContainerComponent } from './components/widgets/container/container.component';
import { ActionDirective } from './directives/action.directive';
import { HighlightDirective } from './directives/highlight.directive';

const routes: Routes = [
  { path: '', component: BuilderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgDragDropModule
  ],
  declarations: [
    BuilderComponent,
    SidebarComponent,
    StageComponent,
    PanelComponent,

    // widgets
    ContainerComponent,

    // directive
    ActionDirective,
    HighlightDirective
  ],
  entryComponents: [
    ContainerComponent
  ],
  providers: [
    SidebarService,
    StageService
  ]
})
export class BuilderModule { }
