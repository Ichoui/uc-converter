import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface Currency {
  value: string;
  icon: string;
}

@Component({
  selector: 'uc-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  formSwitch: FormGroup;
  currency: FormControl;
  tes = 5;
  valueSwitch: string;
  currencies: Currency[] = [
    {value: 'eur', icon: 'euros'},
    {value: 'uc', icon: 'chaltiel'}
  ];

  selectedCurr = 'euros';
  notSelectedCurr = 'chaltiel';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.currency = new FormControl();
    this.valueSwitch = "test";

    // this.myForm(this.eurosValue, this.chaltielValue);
    // this.form.valueChanges.pipe(
    //   debounceTime(1500),
    // ).subscribe(console.log);

    this.formSwitch = this.fb.group({
      from: [],
      to: []
    })
  }

  currencyChange(): void {

  }

  change(): void {

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

  /*!    this.formChaltiel.valueChanges.pipe(
      debounceTime(600),
      tap(inputValue => {
        this.chaltielValue = inputValue;
        this.eurosValue = Number((this.chaltielValue * 20.33).toFixed(2));
      })
    ).subscribe();*!*/


}
