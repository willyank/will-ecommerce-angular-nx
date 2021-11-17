import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { BaseCrudService } from '@willyan-company/generics';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseCrudService<Category> {
  constructor(protected http: HttpClient) {
    super(http);
  }

  protected getBaseUrl(): string {
    return 'categories';
  }
}
