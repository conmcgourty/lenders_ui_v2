import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { advert, user } from './app/models/advert-model';
import { JsonPipe } from '@angular/common';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:3010/api";
  //baseUrl = "https://lenders-api.azurewebsites.net/api";

  constructor(private http: HttpClient) { }

  ping$(advert: advert): Observable<any> {
    // return this.http.get('http://localhost:3010/api/private');
    return this.http.post(this.baseUrl + '/private', advert);
  }

  captureUser(user_obj: user): Observable<any>
  {
    return this.http.post(this.baseUrl +'/user', user_obj);
  }

  createAdvert$(advert: advert): Observable<any>
  {
    return this.http.post(this.baseUrl + '/advert', advert);
  }

  // create(user_obj: any): Observable<any>
  // {
  //   return this.http.post(this.baseUrl + '/user/create', user_obj);
  // }

}