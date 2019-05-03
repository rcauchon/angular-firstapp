import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firstapp';

  myDateObject = new Date(2000, 8, 10, 12, 12, 12, 12);

  foodSourceArray =[ {
      name: 'apple',
      description: 'I am red and crunchy',
      facts: {
        servingSize: '1 small apple',
        calories: '77',
        fat: '0g',
        protein: '0g',
        carbs: '21g'
      }
    },
    {
      name: 'banana',
      description: 'I am yellow and soft',
      facts: {
        servingSize: '1 small banana',
        calories: '90',
        fat: '0g',
        protein: '1g',
        carbs: '23g'
      }
    },
    {
      name: 'egg',
      description: 'I am brown and fragile',
      facts: {
        servingSize: '1 large egg',
        calories: '75',
        fat: '6g',
        protein: '7g',
        carbs: '1g'
      }
    }
  ];

  reloadFoods(){
    const newFoodSourceArray = [ {
      name: 'pear',
      description: 'I am red and crunchy',
      facts: {
        servingSize: '1 small apple',
        calories: '77',
        fat: '0g',
        protein: '0g',
        carbs: '21g'
      }
    },
    {
      name: 'banana',
      description: 'I am yellow and soft',
      facts: {
        servingSize: '1 small banana',
        calories: '90',
        fat: '0g',
        protein: '1g',
        carbs: '23g'
      }
    },
    {
      name: 'egg',
      description: 'I am brown and fragile',
      facts: {
        servingSize: '1 large egg',
        calories: '75',
        fat: '6g',
        protein: '7g',
        carbs: '1g'
      }
    }
  ];

    this.foodSourceArray = newFoodSourceArray;
  }
  appLikeChanged($event){
    console.log('Food item status changed to ' + $event);
  }
}
