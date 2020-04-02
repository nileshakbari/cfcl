import { Component } from '@angular/core';
import { Electrical12Service } from '../../../shared/services/electrical12.service';
import { Electrical12 } from '../../../shared/models/electrical12';

@Component({
  selector: 'app-electrical12',
  templateUrl: './electrical12.component.html',
})
export class Electrical12Component {

  /*
  * Initializes variable of a class
  */
  PageTitle = 'Electrical 1 and 2';
  DBData = new Electrical12();

  /*
  * Initializes objects of a class
  */
  constructor(
    private service: Electrical12Service,
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
