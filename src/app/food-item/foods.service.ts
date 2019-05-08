import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';
import { Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  dummyFoodList: FoodItem[] = [
    new FoodItem(1, 'apple', 'fruit', 'red and crunchy', '1 small apple', 'g', 77, 0, 1, 21),
    new FoodItem(2, 'banana', 'fruit', 'yellow and soft', '1 small banana', 'g', 90, 0, 1, 23),
    new FoodItem(3, 'egg', 'dairy', 'bronw and fragile', '1 large', 'g', 75, 6, 7, 1)
  ]

  constructor(private http: HttpClient) { }

  // Async returns an observalbe
  searchForFood(term: string): Observable<FoodItem[]> {
      let searchUrl = 'http://localhost:3456/api/searchFoods/?name=' + term;
      return this.http.get<FoodItem[]>(searchUrl);
  }

  // Async Promise to return an array of FoodItems
  getFoods_promise(): Promise<FoodItem[]> {

    const foodsUrl = 'http://localhost:3456/api/foods';

    return this.http.get<FoodItem[]>(foodsUrl)
            .toPromise()
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

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
