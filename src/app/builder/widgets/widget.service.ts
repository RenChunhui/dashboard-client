import { Injectable } from "@angular/core";
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { FileComponent } from './components/file/file.component';
import { HtmlComponent } from './components/html/html.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { RadioComponent } from './components/radio/radio.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@Injectable()
export class WidgetService {
  public widgetMap:any = {
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    datetime: DatetimeComponent,
    file: FileComponent,
    html: HtmlComponent,
    input: InputComponent,
    label: LabelComponent,
    radio: RadioComponent,
    select: SelectComponent,
    table: TableComponent,
    textarea: TextareaComponent
  }
}
