import { Component } from '@angular/core';
import { Ammonia1Service } from '../../../shared/services/ammonia1.service';
import { Ammonia1 } from '../../../shared/models/ammonia1';
@Component({
  selector: 'app-ammonia1',
  templateUrl: './ammonia1.component.html',
})
export class Ammonia1Component {
  /*
  * Initializes variable of a class
  */
  PageTitle = 'Ammonia 1';
  DBData = new Ammonia1();
  /*
  * Initializes objects of a class
  */
  constructor(private service: Ammonia1Service) { }
  /*
  * Get Data From DB File Data in Reactive Form Fileds
  */
  onBlur(TDATE: any) {
    this.service.getData(TDATE)
      .subscribe((result: any) => {
        this.DBData = result;
        console.log('Data Get...');
      }, (err: any) => {
        console.log(err);
      });
  }
  /*
  * Data Save and Update by Service File
  */
  onSubmit() {
    this.service.saveData(this.DBData)
      .subscribe((res: any) => {
        console.log('Data Saved Successfully...');
      }, (err: any) => {
        console.log(err);
      });
  }
}
