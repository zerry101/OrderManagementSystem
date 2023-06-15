import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(public http: HttpClient) { }


  baseUrl = "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders";

  getOrderData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`) as Observable<any>;
  }


}
