import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { CommonModule } from '@angular/common'
import { PollComponent } from './poll/poll.component';
import { VotePollComponent } from './vote-poll/vote-poll.component';
const routes: Routes = [
  { path: 'createpoll', component: CreatePollComponent },
  { path: 'votepoll/:id', component: VotePollComponent },
  { path: 'home',  component: PollComponent },
  { path: '', redirectTo: 'home', pathMatch : 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
