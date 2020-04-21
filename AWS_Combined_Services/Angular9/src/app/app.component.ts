import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AWS-Cognito-Auth';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('App component initialised.');
    Auth.currentSession().then(data => {
      this.router.navigateByUrl('/core');
    }, error => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
