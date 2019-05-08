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

  getFoods() {
   // this.fdList = this.foodService.getFoods();

   // Promise based
   this.foodService.getFoods_promise()
      .then(foods => {
        this.fdList = foods;
        console.log('http get works');
      });
  }

  appLikeChanged($event: string){
    console.log('Food item status changed to ' + $event);
  }

  onItemClicked(food: FoodItem){

    console.log('Food id' + food.id)
    this.router.navigate(['/food', food.id, {hello: 'world', foo: 'bar'}]);
  }



}
