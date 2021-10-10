import { Component, OnInit } from '@angular/core';
import { Category } from './models/category.model';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories-list.component.html',
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor() {}

  ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        icon: 'ico',
        name: 'First category',
      },
    ];
  }
}
