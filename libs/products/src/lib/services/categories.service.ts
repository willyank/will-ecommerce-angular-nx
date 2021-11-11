import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '@env/environment';
import { BaseCrudService } from './base-crud.service';

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
  // getCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(this.apiURLCategories + '/all');
  //   //return of([{ id: 'abc-123', name: 'from service', icon: 'icon-test' }]);
  // }

  // getCategory(categoryId: string): Observable<Category> {
  //   return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  // }

  // createCategory(category: Category): Observable<Category> {
  //   return this.http.post<Category>(this.apiURLCategories, category);
  // }

  // updateCategory(category: Category): Observable<Category> {
  //   return this.http.put<Category>(
  //     `${this.apiURLCategories}/${category.id}`,
  //     category
  //   );
  // }

  // deleteCategory(categoryId: string): Observable<any> {
  //   return this.http.delete<any>(`${this.apiURLCategories}/${categoryId}`);
  // }
}
