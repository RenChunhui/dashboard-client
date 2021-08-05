import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormBuilderComponent } from "./form-builder.component";
import { PanelComponent } from "./layouts/panel/panel.component";
import { SliderComponent } from "./layouts/slider/slider.component";
import { StageComponent } from "./layouts/stage/stage.component";
import { ToolbarComponent } from "./layouts/toolbar/toolbar.component";

const routes: Routes = [
  { path: 'form-builder', component: FormBuilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    FormBuilderComponent,
    ToolbarComponent,
    SliderComponent,
    StageComponent,
    PanelComponent
  ]
})
export class FormBuilderModule {}
