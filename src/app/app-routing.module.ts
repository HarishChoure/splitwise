import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';

const routes: Routes = [
    {path:'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'user', loadChildren:()=> import('./login-and-registration/login-and-registration.module').then(mod=>mod.LoginAndRegistrationModule)},
    {path:'group', loadChildren:()=> import('./group/group.module').then(mod=>mod.GroupModule)},
    {path:'settle', loadChildren:()=> import('./settle-up-page/settle-up-page.module').then(mod=>mod.SettleUpPageModule)},
    {path:'expense', loadChildren:()=> import('./expense/expense.module').then(mod=>mod.ExpenseModule)},
    {path:'friend', loadChildren:()=> import('./friends/friends.module').then(mod=>mod.FriendsModule)},
    {path:'**',component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
