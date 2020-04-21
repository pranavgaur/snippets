import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  useremail: string = '';

  constructor(private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit() {
    console.log('Home component initialised.');
    Auth.currentAuthenticatedUser().then(user => {
      this.useremail = user.attributes.email;
      this.spinner.hide();
    });
  }

  logOut() {
    Auth.signOut();
    this.spinner.show();
    this.router.navigateByUrl('/auth/login');
  }

}
