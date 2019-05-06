import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDismiss() {
    this.router.navigate([{outlets: {settingsOutlet: null}}])
  }
}
