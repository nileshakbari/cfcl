import { Component } from '@angular/core';
import { Electrical12Service } from '../../../shared/services/electrical12.service';
import { Electrical12Model } from '../../../shared/models/electrical12';

@Component({
  selector: 'app-electrical12',
  templateUrl: './electrical12.component.html',
  styleUrls: ['./electrical12.component.css']
})
export class Electrical12Component {

  /*
  * Initializes variable of a class
  */
  PageTitle = 'Electrical 12';
  DBData = new Electrical12Model();
  now: Date;
  userDetails: any;
  /*
  * Initializes objects of a class
  */
  constructor(
    private service: Electrical12Service
  ) { setInterval(() => {
    this.now = new Date();
  }, 1); }

  onPreDate() {
    const dte = new Date();
    dte.setDate(dte.getDate() - 2);
    console.log(dte.toString());
  }

  onNextDate() {
    this.now.setDate(this.now.getDate() + 1);
  }

  /*
  * Get Data From DB File Data in Reactive Form Fileds
  */
  onBlur(TDATE: any) {
    this.service.getData(TDATE).subscribe(response => {
      this.DBData = response;
    }, error => {
      console.error(error);
    });
  }

  /*
  * Data Save and Update by Service File
  */
  // onSubmit() {
  //   this.service.saveData(this.DBData)
  //     .subscribe((res: any) => {
  //       console.log('Data Saved Successfully...');
  //     }, (err: any) => {
  //       console.log(err);
  //     });
  // }
}
