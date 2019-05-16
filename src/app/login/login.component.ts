import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  model = {
      username: '',
      password: ''
  }

  submitted = false;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit() {

    this.submitted = true;

    this.loginService.login(this.model.username, this.model.password)
    .subscribe(response => {
      
      if (response.success) {
        this.router.navigateByUrl('');
        console.log('Login: ' + response.success);
        console.log('Message: ' + response.message);
        console.log('Token', response.token);
      } else {
        console.log('Login failed. Please try again');
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
