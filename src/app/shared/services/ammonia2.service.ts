import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ammonia2 } from '../models/ammonia2';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ammonia2Service {

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
    this.APILINK = environment.appUrl + '/Ammonia2';
  }

  /*
  * GET: Get All Record
  */
  // getAllData(): Observable<Ammonia2[]> {
  //   return this.http.get<Ammonia2[]>(this.APILINK);
  // }

  /*
  * GET Ammonia2 Single Record by Transaction Date (TDATE). Will throw exception 404(Record Not Found) when TDATE not found
  */
  getData(TDATE): Observable<Ammonia2> {
    return this.http.get<Ammonia2>(`${this.APILINK}/${TDATE}`);
  }

  /*
  * POST: Save or Update Record
  */
  saveData(Data: Ammonia2): Observable<Ammonia2> {
    return this.http.post<Ammonia2>(this.APILINK, Data, this.httpOptions);
  }
}