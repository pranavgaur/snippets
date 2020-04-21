import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { S3UploadComponent } from './s3-upload/s3-upload.component';
import { CoreComponent } from './core.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 's3-upload',
        component: S3UploadComponent
      },
      {
        path: 'account-setting',
        component: AccountSettingComponent
      }]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
