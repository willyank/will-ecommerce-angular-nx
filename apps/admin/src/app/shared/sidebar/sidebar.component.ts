import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  version: string;

  constructor() {}

  ngOnInit(): void {
    this.version =
      'Versão: ' + environment.version + ' <br> ' + environment.versionDate;
  }
}
