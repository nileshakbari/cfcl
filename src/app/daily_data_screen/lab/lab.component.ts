import { Component } from '@angular/core';
import { LabService } from '../../shared/services/lab.service';
import { LabModel } from '../../shared/models/lab';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lab',
  templateUrl: './Lab.component.html',
  styleUrls: ['./Lab.component.css'],
  providers: [DatePipe]
})
export class LabComponent {
  /*
   * Initializes variable of a class
   */
  PageTitle = 'Lab Analysis';
  DBData = new LabModel();
  LiveDateTime: Date;
  currentDate: any;
  dateCount = 1;
  monthCount = 1;

  /*
   * Initializes objects of a class
   */
  constructor(private service: LabService, private datePipe: DatePipe) {
    setInterval(() => {
      this.LiveDateTime = new Date();
      this.currentDate = new Date();
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

  previousDate() {
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() - this.dateCount);
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    console.log(this.currentDate);
    this.dateCount++;
  }

  // Previous Month
  previousMonth() {
    this.currentDate = new Date();
    this.currentDate.setMonth(this.currentDate.getMonth() - this.monthCount);
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    console.log(this.currentDate);
    this.monthCount++;
  }

  nextDate() {
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() + this.dateCount);
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    console.log(this.currentDate);
    this.dateCount++;
  }

  // Next Month
  nextMonth() {
    this.currentDate = new Date();
    this.currentDate.setMonth(this.currentDate.getMonth() + this.monthCount);
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    console.log(this.currentDate);
    this.monthCount++;
  }
}
