import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Electrical3 } from '../models/electrical3';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Electrical3Service {

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
    this.APILINK = environment.appUrl + '/Electrical3';
  }

  /*
  * GET: Get All Record
  */
  // getAllData(): Observable<Electrical3[]> {
  //   return this.http.get<Electrical3[]>(this.APILINK);
  // }

  /*
  * GET Electrical3 Single Record by Transaction Date (TDATE). Will throw exception 404(Record Not Found) when TDATE not found
  */
  getData(TDATE): Observable<Electrical3> {
    return this.http.get<Electrical3>(`${this.APILINK}/${TDATE}`);
  }

  /*
  * POST: Save or Update Record
  */
  saveData(Data: Electrical3): Observable<Electrical3> {
    return this.http.post<Electrical3>(this.APILINK, Data, this.httpOptions);
  }
}