import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Electrical12 } from '../models/electrical12';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Electrical12Service {

  /*
  * Initializes variable of a class
  */
  APILINK: string;

  /*
  *  Setting HTTP response headers is supported across all GET,POST,PUT,PUT Request In API
  */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*
  * Initializes objects of a class
  * this.APILINK variable generate dynamic api url by using environment base path
  * environment file path : project/src/environments/environment.ts file for set base path for app
  */
  constructor(private http: HttpClient) {
    this.APILINK = environment.appUrl + '/Electrical12';
  }

  /*
  * GET: Get All Record
  */
  // getAllData(): Observable<Electrical12[]> {
  //   return this.http.get<Electrical12[]>(this.APILINK);
  // }

  /*
  * GET Electrical12 Single Record by Transaction Date (TDATE). Will throw exception 404(Record Not Found) when TDATE not found
  */
  getData(TDATE): Observable<Electrical12> {
    return this.http.get<Electrical12>(`${this.APILINK}/${TDATE}`);
  }

  /*
  * POST: Save or Update Record
  */
  saveData(Data: Electrical12): Observable<Electrical12> {
    return this.http.post<Electrical12>(this.APILINK, Data, this.httpOptions);
  }
}
