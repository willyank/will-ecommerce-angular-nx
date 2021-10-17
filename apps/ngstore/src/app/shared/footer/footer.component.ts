import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'willyan-company-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version: string;
  constructor() {
    this.version =
      'Versão: ' + environment.version + ' <br> ' + environment.versionDate;
  }

  ngOnInit(): void {}
}
