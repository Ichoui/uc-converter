import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  selectedIndex: number;

  ngOnInit(): void {
    this.selectedIndex = 1;
  }

  ratePage(index): void {
    this.selectedIndex = index;
  }

  convertPage(index): void {
    this.selectedIndex = index;
  }

}
