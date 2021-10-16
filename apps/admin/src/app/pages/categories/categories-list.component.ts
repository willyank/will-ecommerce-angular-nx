import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@willyan-company/products';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-list.component.html',
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((res) => (this.categories = res));
  }
}
