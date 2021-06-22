import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarLayoutComponent } from './shared/components/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./routes/register/register.module').then(m => m.RegisterModule) },
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
        data: { title: '首页'}
      },
      {
        path: '',
        loadChildren: () => import('./routes/user/user.module').then(m => m.UserModule),
        data: { title: '用户管理'}
      },
      {
        path: '',
        loadChildren: () => import('./routes/role/role.module').then(m => m.RoleModule),
        data: { title: '角色管理'}
      }
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
