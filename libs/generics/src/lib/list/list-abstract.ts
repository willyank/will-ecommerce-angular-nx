import { BaseCrudService } from '../service/base-crud.service';

export class ListAbstract<T> {
  constructor(protected baseCrudService: BaseCrudService<T>) {}

  delete(id: unknown): void {
    this.baseCrudService.delete(id).subscribe((res: number) => {
      if (res < 1) {
        console.log('ops, parece que falhou o delete ' + res);
      } else {
        console.log('deletou com sucesso! id ' + id);
      }
    });
  }

  edit(obj: T): void {}
}
