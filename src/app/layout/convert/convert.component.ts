import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';


export const UC = 1;

@Component({
  selector: 'uc-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  eurosCurr: FormControl;
  ucCurr: FormControl;

  eurosCurrValue: number;
  ucCurrValue: number;

  switchCurrency = false;

  firstCurrency: string;
  secondCurrency: string;

  date: Date;

  @Output() ratePage = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  ngOnInit(): void {
    this.eurosCurr = new FormControl();
    this.ucCurr = new FormControl();
    this.change();
  }

  currencyChange(): void {
    if (this.switchCurrency) {
      console.log('Euros --> UC');
      // EUR -> UC
      this.eurosCurr.valueChanges.pipe(
        debounceTime(600),
        tap(inputValue => {
          console.log(inputValue);
          this.eurosCurrValue = inputValue;
          this.ucCurrValue = Number((this.eurosCurrValue / UC).toFixed(2));
        })
      ).subscribe();
    } else {
      // UC -> EUR
      console.log('UC --> Euros');
      this.ucCurr.valueChanges.pipe(
        debounceTime(600),
        tap(inputValue => {
          console.log(inputValue);
          this.ucCurrValue = inputValue;
          this.eurosCurrValue = Number((this.ucCurrValue * UC).toFixed(2));
        })
      ).subscribe();
    }

  }

  /*
  *  switchCurrency = TRUE : EUR -> UC
  *  switchCurrency = FALSE : UC -> EUR
  */
  change(): void {
    this.switchCurrency = !this.switchCurrency;
    if (this.switchCurrency) {
      this.firstCurrency = 'EUR';
      this.secondCurrency = 'UC';
      this.currencyChange();
    } else {
      this.firstCurrency = 'UC';
      this.secondCurrency = 'EUR';
      this.currencyChange();
    }
  }

  toHistory(): void {
    this.ratePage.emit(0);
  }

  toCurrencyRate(): void {
    this.ratePage.emit(2);
  }

}
