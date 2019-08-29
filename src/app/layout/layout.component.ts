import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'uc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  selectedIndex: number;

  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  ratePage(index): void {
    this.selectedIndex = index;
  }

  convertPage(index): void {
    this.selectedIndex = index;
  }

}
