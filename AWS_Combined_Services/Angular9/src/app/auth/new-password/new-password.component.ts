import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/shared/service/share-data.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  password: string;
  userData: any;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {
    console.log('New password component initialised.');
    this.userData = this.shareDataService.getData();
    this.shareDataService.clearData();
    this.spinner.hide();
  }

  submit() {
    this.spinner.show();
    Auth.completeNewPassword(
      this.userData,  // the Cognito User Object
      this.password,  // the new password
      {}              // OPTIONAL, the required attributes
    ).then(user => {
      // at this time the user is logged in if no MFA required
      this.logout();
      this.spinner.hide();
      this.toastr.success('Login with new password', 'Success', {
        timeOut: 10000
      });
    }).catch(e => {
      console.log(e);
    });
  }

  logout() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        this.router.navigate(['/auth/login']);
      })
      .catch(err => console.log(err));
  }

}
