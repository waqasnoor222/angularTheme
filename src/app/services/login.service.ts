import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../model/login/login";
import { AfterLogin } from "../model/login/afterLogin";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    after_login:AfterLogin;
    apiUrl : string =  environment.apiUrl + '/api/Login/UserLogin';
    constructor(private _http: HttpClient) {
    }
    login(user: Login)  {
       return this._http.post<AfterLogin>(this.apiUrl , user);
    }
}