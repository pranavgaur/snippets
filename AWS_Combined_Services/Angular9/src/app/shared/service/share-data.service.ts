import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  data: any = null;

  constructor() { }

  setData(dataReceived: any) {
    this.data = dataReceived;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = null;
  }
}
