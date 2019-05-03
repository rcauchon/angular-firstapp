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
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit() {
    this.model = new FoodItem('apple', '', '', '', '', 0, 0, 0, 0);
  }

}
