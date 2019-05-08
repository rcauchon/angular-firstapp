import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatrixGreenTextDirective } from './attribute-directives/matrixGreenText.directive';
import { StripVowelPipe } from './pipes/stripVowelPipe';
import { HomeComponent } from './home/home.component';
import { FoodModule } from './food-item/food-module';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixGreenTextDirective,
    StripVowelPipe,
    HomeComponent,
    UserSettingsComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    FoodModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
