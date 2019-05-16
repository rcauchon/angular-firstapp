import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt-session';
import { MyResponse } from '../models/my-response';
import { stringify } from '@angular/core/src/render3/util';
import { RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static APP_AUTH_TOKEN = 'app_auth_token';

  constructor(private http: HttpClient) { }


  // Login method
  login(username: string, password: string): Observable<MyResponse> {

    const loginEndPoint = 'http://localhost:3000/loginj';

    console.log('logging in');
    console.log(JSON.stringify({ username, password}));

    const httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post<MyResponse>(loginEndPoint, JSON.stringify({username, password}), httpOptions)
        .pipe (
        map((response: MyResponse) => {
          console.log('Auth success: ' + response.success);
          console.log('Auth message: ' + response.message);

          if (response.success) {
            localStorage.setItem(LoginService.APP_AUTH_TOKEN, response.token);
            console.log('User logged in, token saved');
            console.log(localStorage.getItem(LoginService.APP_AUTH_TOKEN));
            return response;
          } else if (!response.success) {
            return response;
          }

        }),
        tap(_ => console.log('POST username: ' + username)),
        catchError(this.handleError)
        );

  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Logout Method
  logout(){
    console.log('Inside Logout');
    localStorage.removeItem(LoginService.APP_AUTH_TOKEN);
  }

  // Is Logged In Method
  isLoggedIn() {
    console.log('Is Logged IN: ' + tokenNotExpired(LoginService.APP_AUTH_TOKEN));
    return tokenNotExpired(LoginService.APP_AUTH_TOKEN);
  }

  getToken(): string  {
    return localStorage.getItem(LoginService.APP_AUTH_TOKEN);
  }

  // Verify SERVER JWT token
  verify(): Observable<any> {

    const verifyEndPoint = 'http://localhost:3000/verify';

    console.log('Verify in');

    const token = 'Bearer ' + localStorage.getItem(LoginService.APP_AUTH_TOKEN);

    console.log(token);

    const httpOptions = {headers : new HttpHeaders({ Authorization : token })};

    return this.http.get<MyResponse>(verifyEndPoint, httpOptions)
        .pipe (
        map((response: MyResponse) => {
          console.log('Auth success: ' + response.success);
          console.log('Auth message: ' + response.message);
          console.log('Auth token: ' + JSON.stringify(response.token));

          if (response.success) {
            console.log('Token valid true');
            return response;
          } else if (!response.success) {
            console.log('Token invalid false');
            return response;
          }

        }),
        tap(_ => console.log('GET verify: ' + token)),
        catchError(this.handleError)
        );

  }
}
