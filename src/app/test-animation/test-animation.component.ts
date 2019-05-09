import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.scss'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({ backgroundColor: 'black'})),
      state('on', style({ backgroundColor: 'white'})),
      transition('off => on', [animate('2s')]),
      transition('on => off', [animate('2s')])
    ]),
    trigger('buttonState', [
      state('inactive', style({backgroundColor: '#6c757d', transform: 'scale(1)'})),
      state('active', style({backgroundColor: 'blue', color: 'white', transform: 'scale(2)'})),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class TestAnimationComponent implements OnInit {

  roomState = 'off';

  buttonState = 'inactive';

  constructor() { }

  ngOnInit() {
  }


  // Method toggleLight
  toggleLight() {
    this.roomState = (this.roomState === 'off') ? 'on' : 'off';
  }

  toggelButtonState() {
    this.buttonState = (this.buttonState === 'inactive') ? 'active' : 'inactive';
  }

  lightStart(event: AnimationEvent){
    console.log('light Start');
    console.log(event);
  }
  lightDone(event: AnimationEvent){
    console.log('light done');
    console.log(event);
  }

}
