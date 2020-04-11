import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log('Data Submited Successfully!', 'Successful');
          this.service.formModel.reset();

        } else {
          res.errors.forEach(element => {
            switch (element.tdate) {
              case 'DuplicateUserName':
                console.error('Username is already taken');
                break;

              default:
                console.error('Registration Failed');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
