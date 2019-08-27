import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'uc-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  eurosCurr: FormControl;
  chaltielCurr: FormControl;

  eurosCurrValue: number;
  chaltielCurrValue: number;

  switchCurrency = false;

  firstCurrency: string;
  secondCurrency: string;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.eurosCurr = new FormControl();
    this.chaltielCurr = new FormControl();
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
          this.chaltielCurrValue = Number((this.eurosCurrValue / 20.33).toFixed(2));
        })
      ).subscribe();
    } else {
      // UC -> EUR
      console.log('UC --> Euros');
      this.chaltielCurr.valueChanges.pipe(
        debounceTime(600),
        tap(inputValue => {
          console.log(inputValue);
          this.chaltielCurrValue = inputValue;
          this.eurosCurrValue = Number((this.chaltielCurrValue * 20.33).toFixed(2));
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


  //////////////
  //////////////
  //////////////
  //////////////
  //////////////
  /* eurosChange(): void {

     this.eurosValue = this.form.get('euros').value;
     this.chaltielValue = Number((this.eurosValue / 20.33).toFixed(2));
     this.myForm(this.eurosValue, this.chaltielValue);
   }

   chaltielChange(): void {
     console.log('putain de dieu');
     this.chaltielValue = this.form.get('chaltiel').value;
     this.eurosValue = Number((this.chaltielValue * 20.33).toFixed(2));
     this.myForm(this.eurosValue, this.chaltielValue);
   }

   myForm(euros, chaltiel): void {
     this.form = this.fb.group({
       euros: [euros],
       chaltiel: [chaltiel]
     });
   }
 */
  //////////////
  //////////////
  //////////////
  //////////////
  //////////////

  /*!    ;this.formChaltiel.valueChanges.pipe(
      debounceTime(600),
      tap(inputValue => {
        this.chaltielValue = inputValue;
        this.eurosValue = Number((this.chaltielValue * 20.33).toFixed(2));
      })
    ).subscribe()*!*/


}
