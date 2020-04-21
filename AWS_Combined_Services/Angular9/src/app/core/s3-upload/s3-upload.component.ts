import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { S3PresignedURLService } from '../shared/service/s3-upload/s3-presigned-url.service';
import { S3FileUploadService } from '../shared/service/s3-upload/s3-file-upload.service';
import { HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-s3-upload',
  templateUrl: './s3-upload.component.html',
  styleUrls: ['./s3-upload.component.scss']
})
export class S3UploadComponent implements OnInit {

  zipFile: any;
  fileName: string = 'Choose a zip file';
  uploadingStatus: string = null;
  progressValue: string;
  bucketName: string = null;

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private s3PresignedURLService: S3PresignedURLService,
    private s3FileUploadService: S3FileUploadService) { }

  ngOnInit(): void {
    console.log('s3-upload initialised');
    this.uploadingStatus = null;
    this.bucketName = environment.S3BucketName;
    this.spinner.hide();
    
  }

  onClick(event) {
    event.target.value = ''
  }

  fileInput(event) {

    console.log('File event : ');
    console.log(event);

    if (event) {
      console.log(event.target.files[0]);
      this.zipFile = event.target.files[0];
      this.fileName = this.zipFile.name;
    } else {
      this.zipFile = null;
      this.fileName = 'Choose a zip file'
    }
  }

  upload() {
    this.uploadingStatus = null;
    this.progressValue = '0%';
    if (this.zipFile) {
      this.uploadingStatus = 'in-progress';
      this.spinner.show();

      this.s3PresignedURLService.getPresignedS3URL(this.zipFile.name, this.bucketName).subscribe(res => {
        console.log("res.type : " + res.type);
        console.log('HttpEventType.UploadProgress : ' + HttpEventType.UploadProgress);
        console.log(res.body['url']);
        let url: string = res.body['url'];
        this.s3FileUploadService.uploadFile(this.zipFile.type, url, this.zipFile).subscribe(res => {
          console.log(res);
          console.log("res.type : " + res.type);
          console.log('HttpEventType.UploadProgress : ' + HttpEventType.UploadProgress);

          this.uploadingStatus = 'completed';
          this.zipFile = null;
          this.fileName = 'Choose a zip file'
          this.toastr.success('Success', 'File uploaded successfully', {
            timeOut: 10000
          });
          this.spinner.hide();
        }, error => {
          console.log(error);
          this.uploadingStatus = 'failed';
          this.toastr.error('Upload Error', 'File could not be uploaded', {
            timeOut: 10000
          });
          this.spinner.hide();
        });
      }, error => {
        this.toastr.error('Presigned URL Error', 'Could not fetch presigned URL', {
          timeOut: 10000
        });
        this.spinner.hide();
      });
    } else {
      this.toastr.warning('Select a file to upload', 'No file selected', {
        timeOut: 10000
      });
    }


  }

}
