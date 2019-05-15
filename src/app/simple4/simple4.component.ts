import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-simple4',
  templateUrl: './simpl4.component.html',
  styleUrls: ['./simple4.component.scss']
})
export class Simple4Component implements OnInit {

  someHTML = 'Some HTML <script> alert("hello world") </script>';

  myURL = 'javascript:alert("Hello")';

  myTrustedURL;

  constructor(private sanitizer: DomSanitizer) { 
    this.myTrustedURL = sanitizer.bypassSecurityTrustUrl(this.myURL);
  }

  ngOnInit() {
  }

}
