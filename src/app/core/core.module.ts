import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ImgDirective } from "./directives/img.directive";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { LogInterceptor } from './interceptors/log.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ImgDirective,
    DashboardComponent,
    PageNotFoundComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true}
  ],
  exports: [
    ImgDirective
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() core: CoreModule
  ) {
    if(core) {
      throw new Error('You should import core module only in the root module.')
    }
  }
}
