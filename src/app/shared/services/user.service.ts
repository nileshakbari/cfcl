import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = environment.appUrl;

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: [''],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
  //  Role: ['']
  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      // tslint:disable-next-line: triple-equals
      if (fb.get('Password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register() {
    // tslint:disable-next-line: prefer-const
    let body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      // Role: this.formModel.value.Role
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    if (this.userDetails) {
      return of(this.userDetails);
    } else {
      return this.http.get(this.BaseURI + '/UserProfile').pipe(map((response) => {
        this.userDetails = response;
      }));
    }
  }

  // getMenu() {
  //   return this.http.get(this.BaseURI + '/Menu');
  // }

  // roleMatch(allowedRoles): boolean {
  //   let isMatch = false;
  //   const payLoad = JSON.parse(window.atob(sessionStorage.getItem('token').split('.')[1]));
  //   const userRole = payLoad.role;
  //   allowedRoles.forEach(element => {
  //     // tslint:disable-next-line: triple-equals
  //     if (userRole == element) {
  //       isMatch = true;
  //       return true;
  //     }
  //   });
  //   return isMatch;
  // }
}
