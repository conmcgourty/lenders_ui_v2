import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { advert } from './app/models/advert-model';
import { JsonPipe } from '@angular/common';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3010/api/private";

  constructor(private http: HttpClient) { }

  ping$(advert: advert): Observable<any> {
    // return this.http.get('http://localhost:3010/api/private');
    return this.http.post('http://localhost:3010/api/private', advert);
  }

  captureUser(user: any){
    this.http.post(this.baseUrl +'/',JSON.stringify(user));
  }

  createAdvert$(advert: advert): Observable<any>
  {
    return this.http.post('http://localhost:3010/api/advert/create', advert);
  }

}