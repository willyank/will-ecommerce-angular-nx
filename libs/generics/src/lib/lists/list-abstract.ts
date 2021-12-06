import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Swal, { SweetAlertResult } from 'sweetalert2';

import { BaseModel } from '../models/base.model';
import { PaginationEvent } from '../models/pagination.event.model';
import { Pagination } from '../models/pagination.model';
import { PaginationParams } from '../models/pagination.params.model';
import { BaseCrudService } from '../services/base-crud.service';
import { PrimengMessageService } from '../services/primeng-messages.service';

export abstract class ListAbstract<T extends BaseModel> {
  page: Pagination<T> = { total: 0, items: [] };
  rowsPerPage = 50;
  paginationParams: PaginationParams;

  constructor(
    protected baseCrudService: BaseCrudService<T>,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: PrimengMessageService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.paginationParams = params as PaginationParams;

      this.baseCrudService
        .getPaginated(this.paginationParams)
        .subscribe((result) => {
          if (result) {
            this.page = result;
          }
        });
    });
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
        this.page = {
          items: result,
          total: result.length,
        };
        return result;
      })
    );
  }

  pageChange(event: PaginationEvent): void {
    const param: PaginationParams = {
      page: event.first / event.rows,
      rowsPage: event.rows,
    };
    this.router.navigate([window.location.pathname], {
      queryParams: param,
    });
  }

  sorTable(event: LazyLoadEvent): void {
    if (!event.sortField) {
      return;
    }

    this.router.navigate([window.location.pathname], {
      queryParams: {
        ...this.paginationParams,
        columnOrder: event.sortField,
      },
    });
    console.log(event);
  }

  new(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  edit(id: unknown): void {
    this.router.navigate(['edit/' + id], { relativeTo: this.activatedRoute });
  }
}
