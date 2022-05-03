import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule}  from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import { PollComponent } from './poll/poll.component';
import {OrderListModule} from 'primeng/orderlist';
import { VotePollComponent } from './vote-poll/vote-poll.component';
import {SliderModule} from 'primeng/slider';
import { PollsModule } from './polls/polls.module';
import { PollsRoutingModule } from './polls/polls-routing.module';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    CreatePollComponent,
    PollComponent,
    VotePollComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabMenuModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    DataViewModule,
    OrderListModule,
    SliderModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
