import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { Poll } from '../poll';
import { PollService } from '../poll-service.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  poll:Poll = new Poll();

  constructor(private servicePoll : PollService, private router : Router ) { }
  ngOnInit(): void {

  }
  saveEmployee(){
    this.servicePoll.createPoll(this.poll).subscribe( data =>{
      console.log(data);
      console.log(this.poll);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/home']);
  }
  
  onSubmit(){
    console.log(this.poll);
    this.saveEmployee();
  }
  cancel(){
    this.router.navigate(['/home']);
  }
}
