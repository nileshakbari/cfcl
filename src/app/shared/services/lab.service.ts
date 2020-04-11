import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabModel } from '../models/lab';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LabService {
  /*
   * Initializes variable of a class
   */
  BaseUrl: string;

  /*
   *  Setting HTTP response headers is supported across all GET,POST,PUT,PUT Request In API
   */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /*
   * Initializes objects of a class
   * this.BaseUrl variable generate dynamic api url by using environment base path
   * environment file path : project/src/environments/environment.ts file for set base path for app
   */
  constructor(private http: HttpClient) {
    this.BaseUrl = environment.appUrl + '/lab';
  }

  /*
   * GET Lab Single Record by Transaction Date (DATE)
   */
  get(DATE): Observable<LabModel> {
    return this.http
      .get<LabModel>(`${this.BaseUrl}/${DATE}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  /*
   * POST: Save or Update Record
   */
  post(Data: LabModel): Observable<LabModel> {
    return this.http
    .post<LabModel>(`${this.BaseUrl}`, Data, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
