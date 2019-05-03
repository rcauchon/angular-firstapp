import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { FoodItemComponent } from './food-item.component';
import { FoodFormComponent } from './food-form.component';
import { MdFoodFormComponent } from './md-food-form.component';
import { FoodListComponent } from './food-list.component';
import { FoodRoutingModule } from './food-routing.module';


@NgModule({
    declarations: [
      FoodItemComponent,
      FoodFormComponent,
      MdFoodFormComponent,
      FoodListComponent
    ],
    imports: [
      BrowserModule,
      FormsModule, ReactiveFormsModule, FoodRoutingModule
    ]
  })
  export class FoodModule {}
