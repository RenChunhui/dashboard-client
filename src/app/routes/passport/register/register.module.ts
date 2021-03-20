import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";


const routes: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
