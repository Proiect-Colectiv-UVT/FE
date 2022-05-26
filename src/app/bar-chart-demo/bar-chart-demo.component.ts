import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../poll';
import { PollService } from '../poll-service.service';
import { Result } from '../result';
import { ResultService } from '../result.service';
@Component({
  selector: 'app-bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html',
  styleUrls: ['./bar-chart-demo.component.css'],
})

export class BarChartDemoComponent implements OnInit {
  data: any;
  chartOptions: any;
  polls$ = new Observable<Poll[]>();
  constructor(private service:PollService) {}
  ngOnInit() {
    this.polls$ = this.service.getPoll();
  }
  getDataForPoll(poll:Poll) : any{
    let counter1:number=0;
    let counter2:number=0;
    let counter3:number=0;
    let counter4:number=0;
    let counter5:number=0;
    poll.pollResults.forEach(result=>console.log(result.rating));
    poll.pollResults.forEach(result=>{
      if(result.rating==1){
        counter1++;
      }
      else
      if(result.rating==2){
        counter2++;
      }
      else
      if(result.rating==3){
        counter3++;
      }
      else
      if(result.rating==4){
        counter4++;
      }
      else
      if(result.rating==5){
        counter5++;
      }
      
    });
    this.data = {
      labels: ['1','2','3','4','5'],
      datasets: [
          {
              data: [counter1,counter2,counter3,counter4,counter5],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#C6C6C6",
                  "#FF0000",
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D",
                  "#C6C6C6",
                  "#FF0000"
              ]
          }
      ]
    };
    return this.data;
  }  
}
