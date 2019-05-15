import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firstapp';

  constructor(private loginService:LoginService, private router:Router){
  }

  logout(){
    console.log('Logging out');
    this.loginService.logout();
    this.router.navigate([""]);
  }
}
