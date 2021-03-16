import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = '';
    const headers = request.clone({ headers: request.headers.set('Authorization', token)});

    return next.handle(headers);
  }
}
