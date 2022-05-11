import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { CommonModule } from '@angular/common'
import { PollComponent } from './poll/poll.component';
import { VotePollComponent } from './vote-poll/vote-poll.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'createpoll', component: CreatePollComponent },
  { path: 'votepoll/:id', component: VotePollComponent },
  { path: 'home',  component: PollComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'profile/:id',  component: ProfileComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch : 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
