import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let statu = '';

    return next.handle(request)
      .pipe(
        tap(
          event => statu = event instanceof HttpResponse ? 'success' : '',
          error => statu = 'failed'
        ),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${request.method} "${request.urlWithParams}"
          ${statu} in ${elapsed} ms.`;

          console.info(msg);
        })
      );
  }
}
