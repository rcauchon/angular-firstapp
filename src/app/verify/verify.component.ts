import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  token = 'TOKEN';
  storageVerify = false;
  serverVerify = false;
  tokenvalue = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.token = this.loginService.getToken();

    this.onVerifyStorage();
    this.onVerifyServer();
  }

  onVerifyStorage() {
    this.storageVerify = this.loginService.isLoggedIn();
  }

  onVerifyServer() {

    this.loginService.verify()
    .subscribe(response => {

      console.log('Response : ' + response);
      if (response.success) {
        console.log('Verify: ' + response.success);
        console.log('Message: ' + response.message);
        console.log('Token', response.token);
        this.serverVerify = true;
        this.tokenvalue = JSON.stringify(response.token);
      } else {
        console.log('Verify token failed. Please try again');
        this.serverVerify = false;
      }
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });


  }
  
}
