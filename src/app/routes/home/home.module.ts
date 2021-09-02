import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
