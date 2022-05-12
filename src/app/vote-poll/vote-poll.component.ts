import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Poll } from '../poll';
import { PollService } from '../poll-service.service';
import { Result } from '../result';

@Component({
  selector: 'app-vote-poll',
  templateUrl: './vote-poll.component.html',
  styleUrls: ['./vote-poll.component.css'],
})
export class VotePollComponent implements OnInit {
  val!: number;
  id!:number;
  pollID!:number;
  private voteURL="http://localhost:8080/user/{idUser}/poll/{idPoll}/result/add";
  poll : Poll = new Poll();
  constructor(private route : ActivatedRoute, private service : PollService, private http:HttpClient) { }
  result:Result=new Result();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getPollById(this.id).subscribe(data => {
      this.poll=data;
      
    });
  }
  onSubmit(){
    this.id=this.route.snapshot.params['id'];
    this.result.rating=this.val;
    this.result.comment="";
    this.service.votePoll(this.id,this.result);
    
  }
  cancel(){

  }
}
