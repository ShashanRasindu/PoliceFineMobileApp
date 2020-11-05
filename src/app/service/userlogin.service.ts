import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private httpClient: HttpClient) { }
    // private url1 = 'http://18.220.57.25:5000/api/v1/payment';

    private url = 'http://18.220.57.25:5000/api/v1/traffic';
    private url2 = 'http://18.220.57.25:5000/api/v1/pointsTraffic';
    public LoginUser(postData): Observable<null> {
        return this.httpClient.post<null>(this.url, postData);
    }
    public getPoints(postData): Observable<null> {
        return this.httpClient.post<null>(this.url2, postData);
    }
}
