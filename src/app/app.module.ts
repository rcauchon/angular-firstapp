import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatrixGreenTextDirective } from './attribute-directives/matrixGreenText.directive';
import { StripVowelPipe } from './pipes/stripVowelPipe';
import { HomeComponent } from './home/home.component';
import { FoodModule } from './food-item/food-module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { TestAnimationComponent } from './test-animation/test-animation.component';
import { SimpleComponent } from './simple/simple.component';
import { AuthModule} from './auth/auth.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MatrixGreenTextDirective,
    StripVowelPipe,
    HomeComponent,
    UserSettingsComponent,
    TestAnimationComponent,
    SimpleComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    FoodModule, AppRoutingModule,
    BrowserAnimationsModule, AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
