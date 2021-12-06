import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BaseModel } from '../models/base.model';
import { Pagination } from '../models/pagination.model';
import { PaginationParams } from '../models/pagination.params.model';
import { BaseCrudService } from './base-crud.service';

@Injectable()
export class ListServiceResolver<T extends BaseModel>
  implements Resolve<Pagination<T>>
{
  constructor(
    @Inject('baseCrudService') private baseCrudService: BaseCrudService<T>,
    protected active: ActivatedRoute
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pagination<T>> | Promise<Pagination<T>> {
    return this.baseCrudService.getPaginated(
      route.queryParams as PaginationParams
    );
  }
}
