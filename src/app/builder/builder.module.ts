import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { StageModule } from './stage/stage.module';
import { PanelModule } from './panel/panel.module';
import { SidebarModule } from './sidebar/sidebar.module';

const routes: Routes = [
  { path: '', component: BuilderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    StageModule,
    StageModule,
    PanelModule
  ],
  declarations: [
    BuilderComponent
  ]
})
export class BuilderModule { }
