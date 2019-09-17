import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'uc-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.scss']
})
export class BourseComponent implements OnInit {

  date: Date;

  @Output() convertPage = new EventEmitter<number>();

  lineChartData: ChartDataSets[] = [
    {data: [20.33, 20.33, 20.33, 20.33, 20.33, 20.33, 20.33, 20.33], label: 'Cours du Chaltiel pour 1 Euro'},
  ];
  lineChartLabels: any;

  lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#fff',
        fontFamily: 'Chalet-ParisNineteenSeventy'
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: '#aba7a7',
          },
          ticks: {
            fontColor: '#fff',
          }
        }
      ],
      yAxes: [
        {
          position: 'right',
          gridLines: {
            color: '#aba7a7',
          },
          ticks: {
            fontColor: '#fff',
          }
        }
      ],
    }
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(150,228,172,0.2)',
      borderColor: 'rgba(99,217,138,1)',
      pointBackgroundColor: 'rgba(46,208,110,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,114,27,.8)'
    }
  ];

  // public lineChartPlugins = [pluginAnnotations];


  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit() {
    this.lineChartLabels = [this.checkHour(21), this.checkHour(18), this.checkHour(15), this.checkHour(12), this.checkHour(9), this.checkHour(6), this.checkHour(3), this.checkHour(0)];
  }

  checkHour(minus, last?): any {
    let date = new Date().getHours();
    if (last) {
      return (date + 3) + 'h';
    }
    if (date - minus < 0) {
      return ((date - minus) + 24) + 'h';
    } else if (date - minus < 10 && date - minus >= 0) {
      return '0' + (date - minus) + 'h';
    } else {
      return (date - minus) + 'h';
    }
  }

  toConvert(): void {
    this.convertPage.emit(0);
  }

}
