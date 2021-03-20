import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarLayoutComponent } from './shared/components/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./routes/passport/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./routes/passport/register/register.module').then(m => m.RegisterModule) },
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./routes/dashboard/home/home.module').then(m => m.HomeModule) },
      { path: '', loadChildren: () => import('./routes/dashboard/user/user.module').then(m => m.UserModule) },
      { path: '', loadChildren: () => import('./routes/dashboard/role/role.module').then(m => m.RoleModule) }
    ]
  },
  { path: '**', redirectTo: './routes/exception/404.html' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
