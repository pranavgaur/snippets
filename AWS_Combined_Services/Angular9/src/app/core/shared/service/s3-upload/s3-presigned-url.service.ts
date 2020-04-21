import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S3PresignedURLService {

  constructor(private http: HttpClient) { }

  getPresignedS3URL(filename: string, bucketName: string) {
    const body = {
      bucketName: bucketName,
      objectKey: 'uploads/' + filename
    };

    return this.http.post(environment.S3PresignedServiceBaseUrl + 'presigned-url', body, { observe: 'response' });
  }
}
