import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseCrudService<T> {
  protected apiURL = environment.adminApiUrl + 'v1/';

  constructor(protected http: HttpClient) {}

  protected abstract getBaseUrl(): string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiURL + this.getBaseUrl()}/all`);
    //return of([{ id: 'abc-123', name: 'from service', icon: 'icon-test' }]);
  }

  //   getCategory(categoryId: string): Observable<Category> {
  //     return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  //   }

  //   createCategory(category: Category): Observable<Category> {
  //     return this.http.post<Category>(this.apiURLCategories, category);
  //   }

  //   updateCategory(category: Category): Observable<Category> {
  //     return this.http.put<Category>(
  //       `${this.apiURLCategories}/${category.id}`,
  //       category
  //     );
  //   }

  deleteCategory(id: unknown): Observable<unknown> {
    return this.http.delete<unknown>(
      `${this.apiURL}${this.getBaseUrl()}/${id}`
    );
  }
}
