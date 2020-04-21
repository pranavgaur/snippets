import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S3FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(contenttype: string, signedurl: string, file: any) {
    const headers = new HttpHeaders({ 'Content-Type': contenttype });
    return this.http.put(signedurl, file, { headers: headers, observe: 'response', reportProgress: true });
  }
}
