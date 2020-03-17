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
    return this.http.get('http://localhost:3010/api/private');
  }

  captureUser(user: any){
    this.http.post(this.baseUrl +'/',JSON.stringify(user));
  }

  createAdvert$(advert: advert)
  {

    this.http.post('http://localhost:3010/api/private', advert);

    // this.http.post<advert>(this.baseUrl, JSON.stringify(advert)).subscribe(
    //   (t: advert) => console.info(JSON.stringify(t))
    //   );
    
    //return this.http.get('http://localhost:3010/api/private');
    // return this.http.post('http://localhost:3010/api/private', advert);
  }

}