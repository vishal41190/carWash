import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {AlertModule, AccordionModule} from 'ngx-bootstrap';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewWashComponent } from './home/new-wash/new-wash.component';
import { OrderComponent } from './home/order/order.component';
import {CarWashService} from "./car-wash.service";
import { HistoryComponent } from './history/history.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryDetailsComponent } from './history/history-details/history-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWashComponent,
    OrderComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    Angular2FontAwesomeModule,
    AccordionModule.forRoot()
  ],
  providers: [CarWashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
