import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

import { BaseModel } from '../models/base.model';

export abstract class BaseCrudService<T extends BaseModel> {
  protected apiURL = environment.adminApiUrl + 'v1/';

  constructor(protected http: HttpClient) {}

  protected abstract getBaseUrl(): string;

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiURL + this.getBaseUrl()}/all`);
    //return of([{ id: 'abc-123', name: 'from service', icon: 'icon-test' }]);
  }

  get(id: unknown): Observable<T> {
    return this.http.get<T>(`${this.apiURL}${this.getBaseUrl()}/${id}`);
  }

  save(obj: T): Observable<T> {
    if (obj.id) {
      return this.http.put<T>(`${this.apiURL}${this.getBaseUrl()}`, obj);
    }

    return this.http.post<T>(`${this.apiURL}${this.getBaseUrl()}`, obj);
  }

  delete(id: unknown): Observable<number> {
    return this.http.delete<number>(`${this.apiURL}${this.getBaseUrl()}/${id}`);
  }
}
