import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodSourceArray = [{
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

  appLikeChanged($event: string){
    console.log('Food item status changed to ' + $event);
  }

  ngOnInit(): void {

  }




}
