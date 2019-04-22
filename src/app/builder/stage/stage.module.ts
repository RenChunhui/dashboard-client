import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageService } from './stage.service';
import { NgDragDropModule } from 'src/app/common/drag-drop/drag-drop.module';
import { WidgetModule } from '../widgets/widget.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule,
    WidgetModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    StageComponent,
  ],
  exports:[StageComponent],
  providers: [StageService],
  bootstrap: [StageComponent]
})
export class StageModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: StageModule,
      providers: [
        StageService
      ]
    }
  }
}
