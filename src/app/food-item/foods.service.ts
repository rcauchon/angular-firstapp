import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})

export class FoodsService {

  constructor() { }

  dummyFoodList: FoodItem[] = [
    new FoodItem(1, 'apple', 'fruit', 'red and crunchy', '1 small apple', 'g', 77, 0, 1, 21),
    new FoodItem(2, 'banana', 'fruit', 'yellow and soft', '1 small banana', 'g', 90, 0, 1, 23),
    new FoodItem(3, 'egg', 'dairy', 'bronw and fragile', '1 large', 'g', 75, 6, 7, 1)
  ]

  // Synchronous
  getFoods(): FoodItem[]{
    return this.dummyFoodList;
  }

  // synchronous
  getFood(id): FoodItem{
    let matchedFood = new FoodItem(0, '');
    let foodFound = false;

    this.dummyFoodList.forEach(food => {
      if (!foodFound){
        if (food.id === id){
          console.log('found food id:' + id);
          matchedFood = food;
          foodFound = true;
        }
      }
    });
    return matchedFood;
  }
}
