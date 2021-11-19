import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BaseCrudService } from './base-crud.service';

@Injectable()
export class EditServiceResolver implements Resolve<unknown> {
  constructor(
    @Inject('baseCrudService') private baseCrudService: BaseCrudService<unknown>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): unknown | Observable<unknown> | Promise<unknown> {
    return this.baseCrudService.get(route.params.id);
  }
}
