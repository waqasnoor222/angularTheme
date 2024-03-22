import { CanActivateFn, Router } from '@angular/router';
import {inject, Type} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { AfterLogin } from '../Models/Users/after-login.model';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtHelper= inject(JwtHelperService);
  const router = inject(Router);
  
   
  const token = localStorage.getItem("token");
  //console.log("Token",token)
  //const Refreshtoken = localStorage.getItem("refreshtoken");
  if(token && !jwtHelper.isTokenExpired(token))
   { 
     
    return true;
   }
  /* else if(Refreshtoken && !jwtHelper.isTokenExpired(Refreshtoken))
  { */
    
  
 /*  else
  { */
  router.navigate(['login']);
    return false;
  //}


};
