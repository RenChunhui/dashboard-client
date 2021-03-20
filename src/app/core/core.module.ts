import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, Provider, SkipSelf } from "@angular/core";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

const httpInterceptorProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]

@NgModule({
  declarations: [

  ],
  providers: [httpInterceptorProviders],
  imports: [

  ],
  exports: [

  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() core: CoreModule
  ) {
    if (core) {
      throw new Error('You should import core module only in the root module.')
    }
  }
}
