import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uc-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.scss']
})
export class BourseComponent implements OnInit {

  date: Date;
  @Output() convertPage = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit() {
  }

  toConvert(): void {
    this.convertPage.emit(0);
  }

}
