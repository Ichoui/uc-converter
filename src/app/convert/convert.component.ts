import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'uc-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {

  formEuros: FormControl;
  formChaltiel: FormControl;
  eurosValue: number;
  chaltielValue: number;
  test = 'e';

  constructor() {
  }

  ngOnInit(): void {
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
