import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodItemComponent } from './food-item.component';
import { FoodListComponent } from './food-list.component';


const foodRoutes: Routes = [
  {
    path: 'food/:id',
    component: FoodItemComponent
  },
  {
    path: 'foods',
    component: FoodListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(foodRoutes)],
  exports: [RouterModule]
})

export class FoodRoutingModule { }
