import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any | Observable<any> | Promise<any> {
    let isAuth = window.localStorage.getItem('AuthStatus');

    if (isAuth == null || isAuth == 'false') {
      isAuth = 'false';
      this.router.navigate(['auth/signin']);
    }

    isAuth = JSON.parse(isAuth.toLowerCase());
    return isAuth;
  }

}
