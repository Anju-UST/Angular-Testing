import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    CalculatorComponent,
    NoticeboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
