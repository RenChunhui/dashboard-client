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
import { PlaceholderComponent } from './components/widgets/placeholder/placeholder.component';
import { EventService } from './services/event.service';
import { ContainerDirective } from './components/widgets/container/container.directive';

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
    PlaceholderComponent,
    ContainerComponent,

    // directive
    ContainerDirective,
    ActionDirective,
    HighlightDirective
  ],
  entryComponents: [
    PlaceholderComponent,
    ContainerComponent
  ],
  providers: [
    SidebarService,
    StageService,
    EventService
  ]
})
export class BuilderModule { }
