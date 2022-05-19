import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from '../authentication.service';
import { Poll } from '../poll';
import { PollService } from '../poll-service.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { VotePollComponent } from '../vote-poll/vote-poll.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
   styles: [
    `
      :host ::ng-deep .ui-listbox {
        width: 20em;
        z-index: -1 !important;
      }
      :host ::ng-deep .p-ink {
        display: none !important;
      }
    `
  ]
})
export class PollComponent implements OnInit {
  content?: string;
  
  onSave(poll : Poll){
      return VotePollComponent;
  }
  polls!:Poll[];
  constructor(private service : PollService, private primeNGConfig : PrimeNGConfig, private route : Router,private userService: UserServiceService, private authService:AuthService) { } //declaring PollService type of variable for accesing the getPoll() method which will return available polls via get method
  ngOnInit(): void {  //on component's initialisation it will create a list of polls from the API 
   console.log(sessionStorage.getItem('id'));
    
    this.primeNGConfig.ripple=true;
    this.service.getPoll().subscribe(data=>{
        this.polls=data;
    });
    
  }
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.route.navigate(['/login']);  
  } 
  votePoll(id:number){
    console.log(id);
    this.route.navigate(['votepoll', id]);
  }
  createPoll(id:number) {   
    this.route.navigate(['/createpoll',id]);  
  }
}
