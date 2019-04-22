import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { FileComponent } from './components/file/file.component';
import { HtmlComponent } from './components/html/html.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { RadioComponent } from './components/radio/radio.component';
import { RowComponent } from './components/row/row.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { WidgetDirective } from './widget.directive';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { WidgetService } from './widget.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports:[
    CommonModule,
    NgDragDropModule,
  ],
  declarations: [
    WidgetDirective,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    DatetimeComponent,
    FileComponent,
    HtmlComponent,
    InputComponent,
    LabelComponent,
    RadioComponent,
    RowComponent,
    SelectComponent,
    TableComponent,
    TextareaComponent,
  ],
  entryComponents: [
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    DatetimeComponent,
    FileComponent,
    HtmlComponent,
    InputComponent,
    LabelComponent,
    RadioComponent,
    RowComponent,
    SelectComponent,
    TableComponent,
    TextareaComponent
  ],
  exports: [
    WidgetDirective,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    DatetimeComponent,
    FileComponent,
    HtmlComponent,
    InputComponent,
    LabelComponent,
    RadioComponent,
    RowComponent,
    SelectComponent,
    TableComponent,
    TextareaComponent
  ],
  providers: [
    WidgetService
  ]
})
export class WidgetModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: WidgetModule,
      providers: [
        WidgetService
      ]
    }
  }
}
