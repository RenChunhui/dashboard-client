import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

const routes: Routes = [
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserModule {}
