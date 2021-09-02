import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { UserComponent } from "./user.component";

const routes:Routes = [
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule {}
