import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinebillService {

    constructor(private httpClient: HttpClient) { }
    private url = 'http://18.220.57.25:5000/api/v1/finebill';
    public SaveBill(postData): Observable<null> {
        return this.httpClient.post<null>(this.url, postData);
    }
}
