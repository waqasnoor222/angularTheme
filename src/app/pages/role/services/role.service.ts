import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _httpClient: HttpClient) { }
  saveUserRole(body: any) {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/UserRole`, body);
  }
}
