import { Component } from '@angular/core';
import { LabService } from '../../shared/services/lab.service';
import { LabModel } from '../../shared/models/lab';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-lab',
  templateUrl: './Lab.component.html',
  styleUrls: ['./Lab.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },


    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class LabComponent {
  /*
   * Initializes variable of a class
   */
  PageTitle = 'Lab Analysis';
  DBData = new LabModel();
  LiveDateTime: Date;
  maxDate = new Date();
  currentDate = moment();
  currentDate1 = new Date();
  dateCount = 1;
  monthCount = 1;

  /*
   * Initializes objects of a class
   */
  constructor(private service: LabService) {
    setInterval(() => {
      this.LiveDateTime = new Date();
    }, 1);
  }

  /*
   * Get Data From DB File Data in Reactive Form Fields
   */
  getData(DATE: any) {
    this.service.get(DATE).subscribe(response => {
      this.DBData = response;
    }, error => {
      console.error(error);
    });
  }

  /*
   * Data Save and Update by Service File
   */
  onSubmit() {
    this.service.post(this.DBData).subscribe(response => {
      console.warn('code: 200 Ok');
    }, error => {
      console.error('error : ' + error);
    });
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

    console.log(event.value);
    if (event.value > new Date()) {
      this.currentDate1 = moment(new Date()).subtract(1, 'days').toDate();
      this.getData(this.currentDate1);
    } else {
      this.getData(event.value);
      this.currentDate1 = moment(event.value).toDate();
    }

  }
  previousDate() {
    this.currentDate1 = moment(this.currentDate1).subtract(1, 'days').toDate();
    this.currentDate = moment(this.currentDate).subtract(1, 'days');
    this.getData(this.currentDate1);
  }
  // previousDate() {
  //   this.currentDate = new Date();
  //   this.currentDate.setDate(this.currentDate.getDate() - this.dateCount);
  //   this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
  //   console.log(this.currentDate);
  //   this.dateCount++;
  // }

  // // Previous Month
  // previousMonth() {
  //   this.currentDate = new Date();
  //   this.currentDate.setMonth(this.currentDate.getMonth() - this.monthCount);
  //   this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
  //   console.log(this.currentDate);
  //   this.monthCount++;
  // }

  // nextDate() {
  //   this.currentDate = new Date();
  //   this.currentDate.setDate(this.currentDate.getDate() + this.dateCount);
  //   this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
  //   console.log(this.currentDate);
  //   this.dateCount++;
  // }

  // // Next Month
  // nextMonth() {
  //   this.currentDate = new Date();
  //   this.currentDate.setMonth(this.currentDate.getMonth() + this.monthCount);
  //   this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
  //   console.log(this.currentDate);
  //   this.monthCount++;
  // }
}
