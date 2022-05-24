import { Component, OnInit } from '@angular/core';
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
  polls: Poll[] = [];
  constructor(private service:PollService) {}
  ngOnInit() {
    this.service.getPoll().subscribe(data=>{
      this.polls=data;
    });

    this.polls.forEach(poll=>console.log(poll.title));

    this.data = {
      labels: ['1','2','3','4','5'],
      datasets: [
          {
              data: [300,50,150,3,30],
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
  }
}
