import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//const endpoint = 'http://localhost:9493/api/v1.0/poolbuys/';
const endpoint = 'server/api/v1.0/poolbuys/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'States',httpOptions).pipe(
      map(this.extractData));
  }
}
