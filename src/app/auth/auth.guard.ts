import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('token') != null) {
      // const roles = next.data.permittedRoles as Array<string>;
      // if (roles) {
      //   if (this.service.roleMatch(roles)) { return true; } else {
      //     this.router.navigate(['/forbidden']);
      //     return false;
      //   }
      // }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
