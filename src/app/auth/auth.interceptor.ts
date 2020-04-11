import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    error => {
                        // tslint:disable-next-line: triple-equals
                        if (error.status == 401) {
                            sessionStorage.removeItem('token');
                            sessionStorage.clear();
                            this.router.navigateByUrl('/login');
                        // tslint:disable-next-line: triple-equals
                        } else if (error.status == 403) {
                            this.router.navigateByUrl('/forbidden');
                        }
                    }
                )
            );
        } else {
            return next.handle(req.clone());
        }
    }
}
