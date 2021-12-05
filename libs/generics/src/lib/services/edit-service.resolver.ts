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
export class EditServiceResolver implements Resolve<BaseModel> {
  constructor(
    @Inject('baseCrudService')
    private baseCrudService: BaseCrudService<BaseModel>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): BaseModel | Observable<BaseModel> | Promise<BaseModel> {
    return this.baseCrudService.get(route.params.id);
  }
}
