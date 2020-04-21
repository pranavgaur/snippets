import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ShareDataService } from 'src/app/shared/service/share-data.service';
import constant from 'src/app/shared/utils/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.spinner.hide();
    console.log('Login component initialised.');
  }

  login() {
    this.spinner.show();
    const user = {
      'username': this.username,
      'password': this.password
    };


    Auth.signIn(user).then(user => {
      console.log("Logged in user : " + user);
      
      if (user.challengeName === constant.NEW_PASSWORD_CHALLENGE) {
        this.shareDataService.setData(user);
        this.router.navigateByUrl('/auth/new-password');
      } else {
        this.router.navigateByUrl('/core');
      }
    }).catch(err => {
      console.log("Login error : " + err);
      this.spinner.hide();
      this.toastr.error(err.message, err.code, {
        timeOut: 10000
      });
    });
  }

}
