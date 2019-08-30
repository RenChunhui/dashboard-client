import { NgModule } from '@angular/core';
import { BuilderComponent } from './builder.component';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { StageComponent } from './modules/stage/stage.component';
import { OptionComponent } from './modules/option/option.component';
import { BreakComponent } from './components/break.component';
import { ButtonComponent } from './components/button.component';
import { CheckboxComponent } from './components/checkbox.component';
import { ContainerComponent } from './components/container.component';
import { DateComponent } from './components/date.component';
import { FileComponent } from './components/file.component';
import { NumberComponent } from './components/number.component';
import { RadioComponent } from './components/radio.component';
import { SelectComponent } from './components/select.component';
import { TableComponent } from './components/table.component';
import { TextComponent } from './components/text.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    BuilderComponent,

    ToolbarComponent,
    SidebarComponent,
    StageComponent,
    OptionComponent,

    BreakComponent,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    DateComponent,
    FileComponent,
    NumberComponent,
    RadioComponent,
    SelectComponent,
    TableComponent,
    TextComponent
  ],
  entryComponents: [
    BreakComponent,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    DateComponent,
    FileComponent,
    NumberComponent,
    RadioComponent,
    SelectComponent,
    TableComponent,
    TextComponent
  ]
})
export class BuilderModule {}
