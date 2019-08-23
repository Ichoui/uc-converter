import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'uc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  eurosValue: number;
  chaltielValue: number;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.myForm(this.eurosValue, this.chaltielValue);
  }

  eurosChange(): void {
    // quand touche enfoncée, on fait ça
    this.eurosValue = this.form.get('euros').value;
    this.chaltielValue = this.eurosValue / 20.33;
    this.myForm(this.eurosValue, this.chaltielValue);
  }

  chaltielChange(): void {
    // quand touche enfoncée, on fait ça
    this.chaltielValue = this.form.get('uniteChaltiel').value;
    this.eurosValue = this.chaltielValue * 20.33;
    this.myForm(this.eurosValue, this.chaltielValue);
  }

  myForm(euros, chaltiel): void {
    this.form = this.fb.group({
      euros: [euros],
      uniteChaltiel: [chaltiel]
    });
  }
}
