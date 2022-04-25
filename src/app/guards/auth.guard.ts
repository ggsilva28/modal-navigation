import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


  async auth(url: string = '', data: { allowedRoles?: [] } = {}) {
    console.log('auth')

    return true
  }

  canLoad() {
    console.log('canLoad auth')

    return this.auth();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivate auth')

    return this.auth();

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivateChild auth')

    return this.auth();
  }
}
