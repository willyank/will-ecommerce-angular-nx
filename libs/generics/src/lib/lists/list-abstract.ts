import { ActivatedRoute, Router } from '@angular/router';

import { BaseModel } from '../models/base.model';
import { BaseCrudService } from '../services/base-crud.service';

export abstract class ListAbstract<T extends BaseModel> {
  items: T[];

  constructor(
    protected baseCrudService: BaseCrudService<T>,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    this.items = this.activatedRoute.snapshot.data.list;
  }

  delete(id: unknown): void {
    this.baseCrudService.delete(id).subscribe((res: number) => {
      if (res < 1) {
        console.log('ops, parece que falhou o delete ' + res);
      } else {
        console.log('deletou com sucesso! id ' + id);
      }
    });
  }

  getAll(): void {
    this.baseCrudService.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  new(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  edit(id: unknown): void {
    this.router.navigate(['edit/' + id], { relativeTo: this.activatedRoute });
  }
}
