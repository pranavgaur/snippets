import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'new-password',
    component: NewPasswordComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
