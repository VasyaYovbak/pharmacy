import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.cookie.get('token') !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.cookie.get('token')}`,
        },
      });
    }
    return next.handle(request);
  }
}
