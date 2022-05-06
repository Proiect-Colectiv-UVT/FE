import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Poll } from '../poll';
import { PollService } from '../poll-service.service';
import { VotePollComponent } from '../vote-poll/vote-poll.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  onSave(poll : Poll){
      return VotePollComponent;
  }
  polls!:Poll[];
  constructor(private service : PollService, private primeNGConfig : PrimeNGConfig, private route : Router) { } //declaring PollService type of variable for accesing the getPoll() method which will return available polls via get method
  ngOnInit(): void {  //on component's initialisation it will create a list of polls from the API 
    this.primeNGConfig.ripple=true;
    this.service.getPoll().subscribe(data=>{
        this.polls=data;
    });
  }
  votePoll(id:number){
    console.log(id);
    this.route.navigate(['votepoll', id]);
  }

}