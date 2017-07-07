import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class SecurityService implements CanActivate {
  
  constructor(private router: Router) {
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('userInfo')) {
      return true;
    } else {
      this.router.navigate(['security/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
  
}
