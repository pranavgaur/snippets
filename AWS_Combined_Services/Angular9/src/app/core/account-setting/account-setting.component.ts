import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {

  passwordUpdateForm: FormGroup;

  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.passwordUpdateForm = new FormGroup({
      oldpassword: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required,
      this.invalidPasswordValidator()]),
      confirmpassword: new FormControl('', [Validators.required])
    });
  }

  invalidPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const forbidden = passwordRegex.test(control.value);
      console.log('forbidden : ' + forbidden);
      return forbidden ? null : { 'invalidPassword': { value: control.value } };
    };
  }

  onSubmit() {
    if (this.passwordUpdateForm.valid && (this.passwordUpdateForm.controls.confirmpassword.value === this.passwordUpdateForm.controls.newpassword.value)) {
      this.spinner.show();
      Auth.currentAuthenticatedUser().then(user => {
        console.log(user);
        Auth.changePassword(user, this.passwordUpdateForm.controls.oldpassword.value, this.passwordUpdateForm.controls.newpassword.value).then(res => {
          console.log(res);
          this.spinner.hide();
          this.toastr.success('Password updated successfully', 'Success', {
            timeOut: 10000
          });
        }, error => {
          console.log(error);
          this.spinner.hide();
          this.toastr.error(error.message, 'Error', {
            timeOut: 10000
          });
        });
      });
    }
  }

}
