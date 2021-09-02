import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/form-builder', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./routes/form-builder/form-builder.module').then(m => m.FormBuilderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
