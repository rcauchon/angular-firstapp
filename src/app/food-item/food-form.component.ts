import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})

export class FoodFormComponent implements OnInit {

  groups = ['Fruit', 'Vegetables', 'Meat', 'Dairy', 'Grains'];

  model: FoodItem;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Submitted form');
    console.log(JSON.stringify(this.model));
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit() {
    this.model = new FoodItem('apple', '', '', '', '', 0, 0, 0, 0);
  }

  newFood() {
    this.model = new FoodItem('newFood', '', '', '', 'g', 0, 0, 0, 0);
  }

}
