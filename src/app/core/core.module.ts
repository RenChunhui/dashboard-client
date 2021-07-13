import { NgModule, Optional, SkipSelf } from "@angular/core";

@NgModule({
  imports: [

  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() core: CoreModule
  ) {
    if (core) {
      throw new Error('You should imort core module only in the root module.')
    }
  }
}
