import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

    constructor(private loginService: LoginService, private router:Router) {}
    
    canActivate() {
        if (this.loginService.isLoggedIn()) {
            console.log('Navigation allowed. user is authenticated');
            return true; 
        }
        console.log('Naviagion denied. user not authenticated');
        this.router.navigate(['']);
        return false;
    }
}