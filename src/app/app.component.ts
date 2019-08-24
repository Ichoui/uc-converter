import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'uc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formEuros: FormControl;
  formChaltiel: FormControl;
  eurosValue: number;
  chaltielValue: number;
  date: Date;
  today: any;
  time: any;

  constructor() {
  }

  ngOnInit(): void {
    this.date = new Date();
    this.today = this.date.getDate() + '-' + this.date.getMonth() + '-' + this.date.getFullYear();
    this.time = this.date.getHours() + ':' + this.date.getMinutes();
    this.formEuros = new FormControl();
    this.formChaltiel = new FormControl();
    this.eurosChange();
    this.chaltielChange();
  }

  eurosChange(): void {
    this.formEuros.valueChanges.pipe(
      debounceTime(600),
      tap(inputValue => {
        this.eurosValue = inputValue;
        this.chaltielValue = Number((this.eurosValue / 20.33).toFixed(2));
      })
    ).subscribe();
  }

  chaltielChange(): void {
    this.formChaltiel.valueChanges.pipe(
      debounceTime(600),
      tap(inputValue => {
        this.chaltielValue = inputValue;
        this.eurosValue = Number((this.chaltielValue * 20.33).toFixed(2));
      })
    ).subscribe();
  }

  saveToJson(): void {

  }
}
