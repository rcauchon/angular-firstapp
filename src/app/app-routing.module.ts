import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TestAnimationComponent } from './test-animation/test-animation.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestAnimationComponent
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuardService],
    outlet: 'settingsOutlet'
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
