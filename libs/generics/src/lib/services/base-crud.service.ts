import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

import { BaseModel } from '../models/base.model';
import { Pagination } from '../models/pagination.model';
import { PaginationParams } from '../models/pagination.params.model';

export abstract class BaseCrudService<T extends BaseModel> {
  static PAGE_SIZE = 3;
  protected apiURL = environment.adminApiUrl + 'v1/';

  constructor(protected http: HttpClient) {}

  protected abstract getBaseUrl(): string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiURL + this.getBaseUrl()}/all`);
  }

  getPaginated(queryParam: PaginationParams): Observable<Pagination<T>> {
    const params = [];

    for (const k in queryParam) {
      const value = queryParam[k as keyof PaginationParams];
      if (value !== null && value !== undefined) {
        params.push(`${k}=${value}`);
      }
    }

    return this.http.get<Pagination<T>>(
      `${this.apiURL + this.getBaseUrl()}/paginated?${params.join('&')}`
    );
  }

  get(id: unknown): Observable<T> {
    return this.http.get<T>(`${this.apiURL}${this.getBaseUrl()}/${id}`);
  }

  save(obj: T): Observable<number> {
    if (obj.id) {
      return this.http.put<number>(`${this.apiURL}${this.getBaseUrl()}`, obj);
    }

    return this.http.post<number>(`${this.apiURL}${this.getBaseUrl()}`, obj);
  }

  delete(id: unknown): Observable<number> {
    return this.http.delete<number>(`${this.apiURL}${this.getBaseUrl()}/${id}`);
  }
}
