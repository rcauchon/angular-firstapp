import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate() {
    console.log('inside the canActivate Guard method');
    return true;
  }

  constructor() { }

}
