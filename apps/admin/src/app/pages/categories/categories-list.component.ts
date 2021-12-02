import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAbstract, PrimengMessageService } from '@willyan-company/generics';
import { CategoriesService, Category } from '@willyan-company/products';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent extends ListAbstract<Category> {
  constructor(
    protected categoriesService: CategoriesService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService
  ) {
    super(categoriesService, router, activatedRoute, messageService);
  }
}
