import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { BaseModel } from '../models/base.model';
import { BaseCrudService } from './base-crud.service';

@Injectable()
export class ListServiceResolver<T extends BaseModel> implements Resolve<T[]> {
  constructor(
    @Inject('baseCrudService') private baseCrudService: BaseCrudService<T>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): T[] | Observable<T[]> | Promise<T[]> {
    return this.baseCrudService.getAll();
  }
}
