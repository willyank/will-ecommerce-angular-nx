import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@willyan-company/products';
import { ListAbstract } from '@willyan-company/generics';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-list.component.html',
})
export class CategoriesComponent
  extends ListAbstract<Category>
  implements OnInit
{
  categories: Category[];

  constructor(protected categoriesService: CategoriesService) {
    super(categoriesService);
  }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((res) => (this.categories = res));
  }

  edit(id: any) {}
}
