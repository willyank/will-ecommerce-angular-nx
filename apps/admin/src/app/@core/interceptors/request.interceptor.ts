import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private ngxService: NgxUiLoaderService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          this.ngxService.stop();
        } else {
          this.ngxService.start();
        }
      }),
      catchError((err) => {
        console.log(err);
        this.ngxService.stop();

        throw err;
      })
    );
  }
}
