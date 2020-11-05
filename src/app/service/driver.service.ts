import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClient: HttpClient) { }
    private url = 'http://18.220.57.25:5000/api/v1/driver';
    private url2 = 'http://18.220.57.25:5000/api/v1/driver/newDriver';
    public searchDriver(postData): Observable<null> {
        return this.httpClient.post<null>(this.url, postData);
    }
    public NewDriver(postData): Observable<null> {
        return this.httpClient.post<null>(this.url2, postData);
    }
}
