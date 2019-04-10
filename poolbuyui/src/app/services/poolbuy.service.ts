import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoolbuyService {

  constructor(private http: HttpClient) { }
  getStates()
  {
    // return this.http.get('/server/api/v1.0/poolbuys/States');
    return this.http.get('http://localhost:9434/api/v1.0/poolbuys/States');
  }
}




