import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  model = {
      username: 'x',
      password: 'y'
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
    .subscribe(success => {
      if (success){
        this.router.navigateByUrl('');
        console.log('Login successful');
      } else {
        console.log('Login failed. Please try again');
      }
    });
  }
}
