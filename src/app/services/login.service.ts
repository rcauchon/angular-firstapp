import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt-session';
import { map } from 'rxjs/operators';
import { MyResponse } from '../models/my-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  response = new MyResponse('', '', '');

  // Login method
  login(username: string, password: string) {
    const loginEndPoint = 'http://localhost:3000/loginj';

    console.log('logging in');
    console.log(JSON.stringify({ username, password}));

    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');


    return this.http.post<MyResponse>(
      loginEndPoint,
      JSON.stringify({ username, password}),
      { headers }
    ).pipe(map(response => {

      console.log('Auth success: ' + response.success);
      console.log('Auth message: ' + response.message);

      if (response.success) {
        localStorage.setItem('app_auth_token', response.token);
        console.log('User logged in, token saved');
        console.log(localStorage.getItem('app_auth_token'));
        return response.token;
      } else if (!response.success) {
        return response.message;
      }
    }));

  }

  // Logout Method
  logout(){
    localStorage.removeItem('app_auth_toke');
  }

  // Is Logged In Method
  isLoggedIn() {
    return tokenNotExpired('app_auth_token');
  }
}
