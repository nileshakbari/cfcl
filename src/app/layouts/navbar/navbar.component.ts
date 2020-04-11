import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails: any;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(response => {
        this.userDetails = response;
      }, error => {
        console.log(error);
      },
    );
  }

  onLogout() {
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
