import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ammonia1 } from '../models/ammonia1';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ammonia1Service {

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
    this.APILINK = environment.appUrl + '/Ammonia1';
  }

  /*
  * GET: Get All Record
  */
  // getAllData(): Observable<Ammonia1[]> {
  //   return this.http.get<Ammonia1[]>(this.APILINK);
  // }

  /*
  * GET Ammonia1 Single Record by Transaction Date (TDATE). Will throw exception 404(Record Not Found) when TDATE not found
  */
  getData(TDATE): Observable<Ammonia1> {
    return this.http.get<Ammonia1>(`${this.APILINK}/${TDATE}`);
  }

  /*
  * POST: Save or Update Record
  */
  saveData(Data: Ammonia1): Observable<Ammonia1> {
    return this.http.post<Ammonia1>(this.APILINK, Data, this.httpOptions);
  }
}