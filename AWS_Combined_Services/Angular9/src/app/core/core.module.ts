import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { S3UploadComponent } from './s3-upload/s3-upload.component';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    S3UploadComponent,
    CoreComponent,
    HomeComponent,
    AccountSettingComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreModule { }
