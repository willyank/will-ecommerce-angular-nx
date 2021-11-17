import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@willyan-company/products';
import { ListAbstract } from '@willyan-company/generics';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-list.component.html',
})
export class CategoriesComponent extends ListAbstract<Category> {
  constructor(
    protected categoriesService: CategoriesService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    super(categoriesService, router, activatedRoute);
  }
}
