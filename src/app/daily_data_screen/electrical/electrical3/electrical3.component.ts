import { Component } from '@angular/core';
import { Electrical3Service } from '../../../shared/services/electrical3.service';
import { Electrical3 } from '../../../shared/models/electrical3';

@Component({
  selector: 'app-electrical3',
  templateUrl: './electrical3.component.html',
  styleUrls: ['./electrical3.component.css']
})
export class Electrical3Component {

  /*
  * Initializes variable of a class
  */
  PageTitle = 'Electrical 3';
  DBData = new Electrical3();
  now: Date;
  userDetails: any;
  /*
  * Initializes objects of a class
  */
  constructor(
    private service: Electrical3Service
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
