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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import { PollComponent } from './poll/poll.component';
import {OrderListModule} from 'primeng/orderlist';
import { VotePollComponent } from './vote-poll/vote-poll.component';
import {SliderModule} from 'primeng/slider';
import { PollsModule } from './polls/polls.module';
import { PollsRoutingModule } from './polls/polls-routing.module';
import {CalendarModule} from 'primeng/calendar';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    CreatePollComponent,
    PollComponent,
    VotePollComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
