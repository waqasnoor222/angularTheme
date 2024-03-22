import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
req1:any;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token"); // you probably want to store it in localStorage or something
    //const refreshtoken = localStorage.getItem("refreshtoken");
  
    if (!token) 
    {
      return next.handle(req);
    }
   /*  else if(token)
    { */
      this.req1 = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    /* }
    else
    {
      this.req1 = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${refreshtoken}`),
      });
    } */
   
    return next.handle(this.req1);
  }
}
