import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Poll } from '../poll';
import { PollService } from '../poll-service.service';

@Component({
  selector: 'app-vote-poll',
  templateUrl: './vote-poll.component.html',
  styleUrls: ['./vote-poll.component.css']
})
export class VotePollComponent implements OnInit {
  val!:number;
  id!:number;
  poll : Poll = new Poll();
  constructor(private route : ActivatedRoute, private service : PollService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getPollById(this.id).subscribe(data => {
      this.poll=data;
      
    });
  }

}
