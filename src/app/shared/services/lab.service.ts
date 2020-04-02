import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabModel } from '../models/lab';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*
  * Initializes objects of a class
  * this.BaseUrl variable generate dynamic api url by using environment base path
  * environment file path : project/src/environments/environment.ts file for set base path for app
  */
  constructor(private http: HttpClient) {
    this.BaseUrl = environment.appUrl;
  }

  /*
  * GET: Get All Record
  */
  // getLabAllData(ControllerName): Observable<Lab[]> {
  //   return this.http.get<Lab[]>(`${this.BaseUrl}/${ControllerName}`);
  // }

  /*
  * GET Lab Single Record by Transaction Date (TDATE) as Date. Will throw exception 404(Record Not Found) when TDATE not found
  */
  getData(ControllerName, unit, Date): Observable<LabModel> {
    return this.http.get<LabModel>(`${this.BaseUrl}/${ControllerName}/${Date}/${unit}`);
  }

  /*
  * POST: Save or Update Record
  */
  saveData(ControllerName, Data: LabModel): Observable<LabModel> {
    return this.http.post<LabModel>(`${this.BaseUrl}/${ControllerName}`, Data, this.httpOptions);
  }
}
