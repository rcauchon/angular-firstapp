import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
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
  exports: [RouterModule]
})

export class AppRoutingModule { }
