import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RegisterComponent } from "./register.component";


const routes: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
