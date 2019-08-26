import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface Language {
  value: string;
  icon: string;
}

@Component({
  selector: 'uc-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  euross: FormControl;
  form: FormGroup;
  eurosValue: any;
  chaltielValue: any;
  languages: Language[] = [
    {value: 'eur', icon: 'euros'},
    {value: 'cad', icon: 'canada'},
    {value: 'uc', icon: 'chaltiel'}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm(this.eurosValue, this.chaltielValue);
    this.form.valueChanges.pipe(
      debounceTime(1500),
    ).subscribe(console.log);
  }

  eurosChange(): void {

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


  change(): void {

  }
}
