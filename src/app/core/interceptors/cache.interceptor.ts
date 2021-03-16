import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>,next: HttpHandler) {
    return next.handle(request);
  }
}
