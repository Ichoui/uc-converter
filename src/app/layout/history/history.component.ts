import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'uc-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  date: Date = new Date();

  @Output() convertPage = new EventEmitter<number>();

  lineChartData: ChartDataSets[] = [
    {data: [null, 20.33, 1], label: ''},
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

  ngOnInit() {
    this.lineChartLabels = ['2018', '2019', '2020', '2021'];
  }

  toConvert(): void {
    this.convertPage.emit(1);
  }
}
