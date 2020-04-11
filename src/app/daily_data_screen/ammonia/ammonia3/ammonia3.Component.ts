import { Component } from '@angular/core';
import { Ammonia3Service } from '../../../shared/services/ammonia3.service';
import { Ammonia3 } from '../../../shared/models/ammonia3';

@Component({
  selector: 'app-ammonia3',
  templateUrl: './ammonia3.component.html',
})
export class Ammonia3Component {

  /*
  * Initializes variable of a class
  */
  PageTitle = 'Ammonia 3';
  DBData = new Ammonia3();

  /*
  * Initializes objects of a class
  */
  constructor(
    private service: Ammonia3Service,
  ) { }

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
