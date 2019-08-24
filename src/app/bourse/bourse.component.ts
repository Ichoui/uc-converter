import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uc-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.scss']
})
export class BourseComponent implements OnInit {

  date: Date;
  today: any;
  time: any;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date();
  }

  reload(): void {

  }
}
