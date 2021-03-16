import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./routes/register/register.module').then(m => m.RegisterModule) },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule) }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
