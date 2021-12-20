import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-root',
  templateUrl: './not-found-component.html',
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
