import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { UsersComponent } from './users/users.component';
import { AddressesComponent } from './addresses/addresses.component';
import { BanksComponent } from './banks/banks.component';

//import { RegisterComponent } from './signup/register/register.component';
const routes: Routes = [
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  //{path: 'signup/register', component: RegisterComponent},

  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'addresses', loadChildren: () => import('./addresses/addresses.module').then(m => m.AddressesModule) },
  {path:'banks',component:BanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }