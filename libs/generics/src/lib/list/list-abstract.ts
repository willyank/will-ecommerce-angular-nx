import { ActivatedRoute, Router } from '@angular/router';
import { BaseCrudService } from '../services/base-crud.service';

export abstract class ListAbstract<T> {
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

  edit(id: unknown): void {
    let route = 'edit';
    if (id) {
      route += '/' + id;
    }
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
