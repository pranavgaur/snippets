import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [LoginComponent, NewPasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: []
})
export class AuthModule { }
