import { Component } from '@angular/core';
import { Ammonia2Service } from '../../../shared/services/ammonia2.service';
import { Ammonia2 } from '../../../shared/models/ammonia2';

@Component({
  selector: 'app-ammonia2',
  templateUrl: './ammonia2.component.html',
})
export class Ammonia2Component {

  /*
  * Initializes variable of a class
  */
  PageTitle = 'Ammonia 2';
  DBData = new Ammonia2();

  /*
  * Initializes objects of a class
  */
  constructor(
    private service: Ammonia2Service,
  ) { }

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
