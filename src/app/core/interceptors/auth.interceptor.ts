import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as Cookies from "js-cookie";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = Cookies.get('access_token');
    const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })

    return next.handle(authReq);
  }
}
