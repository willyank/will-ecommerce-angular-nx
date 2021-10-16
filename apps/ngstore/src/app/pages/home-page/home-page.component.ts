import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'willyan-company-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  click(): void {
    console.log('clicou');
  }
}
