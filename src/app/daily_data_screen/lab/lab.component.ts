import { Component, OnInit } from '@angular/core';
import { LabService } from '../../shared/services/lab.service';
import { LabModel } from '../../shared/models/lab';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lab',
  templateUrl: './Lab.component.html'
})
export class LabComponent implements OnInit {
  /*
   * Initializes variable of a class
   */
  PageTitle = 'Lab Analysis';
  apiControllerName = 'Lab';
  unit = 'GP-I';
  DBData = new LabModel();
  now: Date;
  userDetails: any;

  /*
   * Initializes objects of a class
   */
  constructor(private service: LabService, private userservice: UserService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {
    this.userservice.getUserProfile().subscribe(response => {
        this.userDetails = response;
      }, error => {
        console.error(error);
      }
    );
    this.onPreDate();
  }

  /*
   * Get Data From DB File Data in Reactive Form Fields
   */
  onBlur(TDATE: any) {
    this.service.getData(this.apiControllerName,this.unit, TDATE).subscribe(response => {
        this.DBData = response;
        console.warn('Data Get...');
      }, error => {
        console.error(error);
      }
    );
  }

  onPreDate() {
    this.now.setDate(this.now.getDate() - 2);
    // console.log(this.now.toString());
  }
  onNextDate() {
    this.now.setDate(this.now.getDate() + 1);
  }

  /*
   * Data Save and Update by Service File
   */
  onSubmit() {
    this.service.saveData(this.apiControllerName, this.DBData).subscribe(response => {
        console.warn('Data Saved Successfully...');
      }, error => {
        console.log(error);
      }
    );
  }
  
}
