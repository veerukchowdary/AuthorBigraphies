import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  private serviceUrl: string;

  constructor(private httpClient: HttpClient,) {
    this.serviceUrl = 'https://openlibrary.org/';
  }

  get(method: string, id?: any) {
    let url = this.serviceUrl + method;
    if (id != null) {
      url = url + '/' + id;
    }
    return this.httpClient.get(url)
      .pipe(
        catchError(this.handleError<any>(method))
      );
  }

  post(method: string, data: any) {
    return this.httpClient.post(this.serviceUrl + method, data)
      .pipe(
        catchError(this.handleError<any>(method + JSON.stringify(data)))
      );
  }

  put(method: string, data: any) {
    return this.httpClient.put(this.serviceUrl + method, data)
      .pipe(
        catchError(this.handleError<any>(method + JSON.stringify(data)))
      );
  }

  delete(method: string, id: number) {
    return this.httpClient.delete(this.serviceUrl + method + '/' + id)
      .pipe(
        catchError(this.handleError<any>(method + id))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}