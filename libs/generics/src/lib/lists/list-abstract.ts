import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal, { SweetAlertResult } from 'sweetalert2';

import { BaseModel } from '../models/base.model';
import { BaseCrudService } from '../services/base-crud.service';
import { PrimengMessageService } from '../services/primeng-messages.service';

export abstract class ListAbstract<T extends BaseModel> {
  items: T[];

  constructor(
    protected baseCrudService: BaseCrudService<T>,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService
  ) {
    this.items = this.activatedRoute.snapshot.data.list;
  }

  delete(id: unknown): void {
    const confirm = Swal.fire({
      html: 'Confirm delete?',
      title: 'Confirmation',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      showConfirmButton: true,
    });

    const that = this;
    confirm.then((yes: SweetAlertResult) => {
      if (yes.isConfirmed) {
        that.finishDelete(id);
      }
    });
  }

  private finishDelete(id: unknown): void {
    this.baseCrudService.delete(id).subscribe((res: number) => {
      if (res < 1) {
        this.messageService.error('Failed on delete');
      } else {
        this.getAll().subscribe(() => {
          this.messageService.success('Deleted successfully');
        });
      }
    });
  }

  getAll(): Observable<T[]> {
    return this.baseCrudService.getAll().pipe(
      tap((result) => {
        this.items = result;
        return result;
      })
    );
  }

  new(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  edit(id: unknown): void {
    this.router.navigate(['edit/' + id], { relativeTo: this.activatedRoute });
  }
}
