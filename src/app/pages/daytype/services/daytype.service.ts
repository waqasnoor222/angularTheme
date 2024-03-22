import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DayType } from '../model/daytype-dao';
@Injectable({
  providedIn: 'root'
})
export class DaytypeService {

  constructor(private _httpClient: HttpClient) { }

  getAllDayTypes(): Observable<DayType[]> {
    return this._httpClient.get<DayType[]>(`${environment.apiUrl}/api/DayType`);
  }
  saveDayType(data: any) {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/DayType`, data);
  }
  deleteDayType(id:string)
  {
    return this._httpClient.delete<any>(`${environment.apiUrl}/api/DayType/${id}`);
  }
}
