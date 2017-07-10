import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
  // private readonly URL_LOGIN = '/api/authenticate';
  private readonly URL_LOGIN = 'http://triipbook.com/api/auth/login';

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    return this.http.post(this.URL_LOGIN, {email: username, password: password})
      .map((res: Response) => {
        let user = res.json();
        if (user && user.token) {
          localStorage.setItem('userInfo', JSON.stringify(user));
          return user;
        }
      });
  }
  logout(){
    localStorage.removeItem('userInfo');
  }

}
