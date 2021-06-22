import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RoleComponent } from "./role.component";

const routes: Routes = [{ path: 'role', component: RoleComponent }];

@NgModule({
  declarations: [RoleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RoleModule { }
