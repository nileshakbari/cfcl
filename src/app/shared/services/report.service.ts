import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportModel } from '../models/Report';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  /*
  * Initializes variable of a class
  */
  BaseUrl: string;
  DBData: any;

  /*
  *  Setting HTTP response headers is supported across all GET,POST,PUT,PUT Request In API
  */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*
  * Initializes objects of a class
  * this.BaseUrl variable generate dynamic api url by using environment base path
  * environment file path : project/src/environments/environment.ts file for set base path for app
  */
  constructor(private http: HttpClient) {
    this.BaseUrl = environment.appUrl + '/Report';
  }

  /*
  * GET: Get All Record
  */
  getAllData(): Observable<ReportModel[]> {
    return this.http.get<ReportModel[]>(`${this.BaseUrl}`, this.httpOptions);
  }

  /*
  * GET Report Single Record by Parameter. Will throw exception 404(Record Not Found) when Data not found
  */
  // getData2(Date, Unit): Observable<ReportModel[]> {
  //     return this.http.get<ReportModel[]>(`${this.BaseUrl}/${Date}/${Unit}`, this.httpOptions);
  // }
}
