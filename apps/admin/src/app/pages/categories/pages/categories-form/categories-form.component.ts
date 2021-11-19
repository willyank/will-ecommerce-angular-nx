import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '@willyan-company/products';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-form.component.html',
})
export class CategoriesFormComponent {
  obj: unknown;
  constructor(
    protected categoriesService: CategoriesService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot.data.editObject);
    this.obj = this.activatedRoute.snapshot.data.editObject;
  }
}
