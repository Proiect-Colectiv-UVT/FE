import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollComponent } from '../poll/poll.component';
import { VotePollComponent } from '../vote-poll/vote-poll.component';

const pollsRoutes: Routes = [
  { path: 'home',  component: PollComponent },
  { path: 'votepoll/:id', component: VotePollComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pollsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PollsRoutingModule { }