import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuModel } from '../models/Menu';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

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
    this.BaseUrl = environment.appUrl + '/Menu';
  }

  /*
  * GET Menu Single Record by Transaction Date (DATE)
  */
  getData(): Observable<MenuModel> {
    return this.http.get<MenuModel>(`${this.BaseUrl}`);
  }

  /*
  * POST: Save or Update Record
  */
  // saveData(ControllerName, Data: MenuModel): Observable<MenuModel> {
  //   return this.http.post<MenuModel>(`${this.BaseUrl}/${ControllerName}`, Data, this.httpOptions);
  // }
}
