import { Component, OnInit } from '@angular/core';
import { Electrical3Service } from '../../../shared/services/electrical3.service';
import { Electrical3 } from '../../../shared/models/electrical3';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-electrical3',
  templateUrl: './electrical3.component.html',
})
export class Electrical3Component implements OnInit {

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
    private service: Electrical3Service, private userservice: UserService
  ) { setInterval(() => {
    this.now = new Date();
  }, 1); }

  ngOnInit(): void {
    this.userservice.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      }
    );
  }

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
