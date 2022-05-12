import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html',
  styleUrls: ['./bar-chart-demo.component.css']
})
export class BarChartDemoComponent implements OnInit {

  databar: any;
datadoughnut: any;
dataline: any;
datapolar: any;
datapie:any;
dataradar:any;
datacombo: any;
chartOptions: any;
constructor() {}
ngOnInit() {
  //Bar Chart
  this.databar = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'My Second dataset',
                  backgroundColor: '#FFA726',
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      };
     //Doughnut Chart
      this.datadoughnut = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
       //Line Chart
        this.dataline = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#42A5F5'
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: '#FFA726'
              }
          ]
      };
     //Polar Chart
      this.datapolar = {
          datasets: [{
              data: [
                  11,
                  16,
                  7,
                  3,
                  14
              ],
              backgroundColor: [
                  "#FF6384",
                  "#4BC0C0",
                  "#FFCE56",
                  "#E7E9ED",
                  "#36A2EB"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Red",
              "Green",
              "Yellow",
              "Grey",
              "Blue"
          ]
      };
      //Pie Chart
      this.datapie = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
        //Radar Chart
        this.dataradar = {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)',
                  data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                  label: 'My Second dataset',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  pointBackgroundColor: 'rgba(255,99,132,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(255,99,132,1)',
                  data: [28, 48, 40, 19, 96, 27, 100]
              }
          ]
      };
 
      //Combo Chart
      this.datacombo = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };
    //Chart Option For Combo
    this.chartOptions = {
      responsive: true,
      title: {
          display: true,
          text: 'Combo Bar Line Chart'
      },
      tooltips: {
          mode: 'index',
          intersect: true
      }
  };
    }
}
