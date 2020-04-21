import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  username: string;
  resetcode: string;
  resetRequest: Boolean;
  resetConfirmation: Boolean;
  password: string;

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetRequest = true;
    this.resetConfirmation = false;
  }

  submitForgotPasswordRequest() {
    this.spinner.show();
    Auth.forgotPassword(this.username).then(res => {
      this.spinner.hide();
      console.log(res);
      this.resetConfirmation = true;
      this.resetRequest = false;
    }, error => {
      console.log(error);
      this.toastr.error(error.message, 'Error', {
        timeOut: 10000
      });
    });
  }

  completeForgotPasswordRequest() {
    this.spinner.show();
    Auth.forgotPasswordSubmit(this.username, this.resetcode, this.password).then(res => {
      this.spinner.hide();
      console.log(res);
      this.toastr.success('Password updated successfully', 'Success', {
        timeOut: 10000
      });
      // Auth.signOut();
      this.router.navigateByUrl('/auth/login');
    }, error => {
      this.spinner.hide();
      console.log(error);
      this.toastr.error(error.message, 'Error', {
        timeOut: 10000
      });
    });
  }

}
