import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { MatrixGreenTextDirective } from './attribute-directives/matrixGreenText.directive';
import { StripVowelPipe } from './pipes/stripVowelPipe';
import { FoodFormComponent } from './food-item/food-form.component';
import { MdFoodFormComponent } from './food-item/md-food-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    MatrixGreenTextDirective,
    StripVowelPipe,
    FoodFormComponent,
    MdFoodFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
