import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  // navigate(route: string) {
  //   this.spinner.show();
  //   switch (route) {
  //     case 'home':
  //       this.router.navigateByUrl('/core');
  //       break;

  //     case 's3-upload':
  //       this.router.navigateByUrl('/core/s3-upload');
  //       break;

  //     default:
  //       break;
  //   }
  // }
  logOut() {
    Auth.signOut();
    this.spinner.show();
    this.router.navigateByUrl('/auth/login');
  }

}
