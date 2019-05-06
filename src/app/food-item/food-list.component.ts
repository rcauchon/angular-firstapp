import { Component, OnInit, Input } from '@angular/core';
import { FoodItem} from '../models/food-item';
import { FoodsService } from './foods.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  providers: [FoodsService]
})
export class FoodListComponent implements OnInit {

   fdList: FoodItem[];

  constructor(private foodService: FoodsService, private router: Router){}

  ngOnInit(): void {

    this.getFoods();
  }

  reloadFoods(){
    const newFoodSourceArray = [ {
      id: 1,
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
      id: 2,
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
      id: 3,
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

    this.fdList = newFoodSourceArray;
    console.log('New dummy food source array');
  }

  getFoods() {
    this.fdList = this.foodService.getFoods();
  }

  appLikeChanged($event: string){
    console.log('Food item status changed to ' + $event);
  }

  onItemClicked(food: FoodItem){

    console.log('Food id' + food.id)
    this.router.navigate(['/food', food.id, {hello: 'world', foo: 'bar'}]);
  }



}
