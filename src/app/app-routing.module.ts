import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TestAnimationComponent } from './test-animation/test-animation.component';
import { Simple4Component } from './simple4/simple4.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { VerifyComponent } from './verify/verify.component';
import { AdminGuardService } from './services/admin-guard.service';


const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestAnimationComponent
  },
  {
    path: 'simple4',
    component: Simple4Component
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuardService],
    outlet: 'settingsOutlet'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    // Must be at the last
    path: '**',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
