import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ammonia3 } from '../models/ammonia3';
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Ammonia3Service {

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
  DBData: any;

  /*
  * Initializes objects of a class
  * this.APILINK variable generate dynamic api url by using environment base path
  * environment file path : project/src/environments/environment.ts file for set base path for app
  */
  constructor(private http: HttpClient) {
    this.APILINK = environment.appUrl + '/Ammonia3';
  }

  /*
  * GET: Get All Record
  */
  // getAllData(): Observable<Ammonia3[]> {
  //   return this.http.get<Ammonia3[]>(this.APILINK);
  // }

  /*
  * GET Ammonia3 Single Record by Transaction Date (TDATE). Will throw exception 404(Record Not Found) when TDATE not found
  */
  // getData(TDATE): Observable<Ammonia3> {
  //   return this.http.get<Ammonia3>(`${this.APILINK}/${TDATE}`);
  // }
  getData(TDATE) {
    if (this.DBData) {
      return of(this.DBData);
    } else {
    return this.http.get(`${this.APILINK}/${TDATE}`)
      .pipe(map((response) => {
        this.DBData = response;
      }));
    }
  }

  /*
  * POST: Save or Update Record
  */
  // saveData(Data: Ammonia3): Observable<Ammonia3> {
  //   return this.http.post<Ammonia3>(this.APILINK, Data, this.httpOptions);
  // }
}
