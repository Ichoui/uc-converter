import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uc-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.scss']
})
export class BourseComponent implements OnInit {

  date: Date;

  @Output() convertPage = new EventEmitter<number>();

  // Chart Line
  myData: any;
  LineChart = 'LineChart';
  myOptions: any;
  myColumnNames = ['', 'Cours du Chaltiel'];
  myWidth = 900;
  myHeight = 600;

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit() {
    this.myData = [
      ['00:00 GMT +2', 20.33],
      ['03:00 GMT +2', 20.33],
      ['06:00 GMT +2', 20.33],
      ['09:00 GMT +2', 20.33],
      ['12:00 GMT +2', 20.33],
      ['15:00 GMT +2', 20.33],
      ['18:00 GMT +2', 20.33],
      ['21:00 GMT +2', 20.33],
      ['24:00 GMT +2', 20.33],
    ];
    this.myOptions = {
      title: 'Cours du Chaltiel',
      colors: ['#465a88'],
      column: 'Cours du chaltiel',
      hAxis: {
        title: 'Dernières 24h'
      },
      vAxis: {
        title: 'Chaltiel'
      }
    };
  }

  toConvert(): void {
    this.convertPage.emit(0);
  }

}
