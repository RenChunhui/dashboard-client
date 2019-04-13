import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './builder.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { StageModule } from './stage/stage.module';
import { PanelModule } from './panel/panel.module';

const routes: Routes = [
  { path: '', component: BuilderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
    StageModule,
    PanelModule
  ],
  declarations: [BuilderComponent],
})
export class BuilderModule { }
