import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  };
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        sessionStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        // tslint:disable-next-line: triple-equals
        if (err.status == 400) {
          console.error('Incorrect username or password.', 'Authentication failed.');
        } else {
          console.log(err);
        }
      }
    );
  }
}
