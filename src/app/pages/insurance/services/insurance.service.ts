import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlan } from '../model/insurance-plan';
import { environment } from 'src/environments/environment';
import { Insurance } from '../model/insurance';
import { FamilyDetails } from '../model/family-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  constructor( private _httpClient : HttpClient) { }
  getAllInsuranceDetails(): Observable<Insurance[]> {
    return this._httpClient.get<Insurance[]>(`${environment.apiUrl}/api/Insurance`);
  }
  getAllInsurancePlan(): Observable<InsurancePlan[]> 
  {
    return this._httpClient.get<InsurancePlan[]>(`${environment.apiUrl}/api/InsurancePlan`);
  }
  saveInsuranceDetails(InsuranceDetailList : Insurance)
  {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/Insurance`,InsuranceDetailList);
  }
  getFamilyDetailsbyUserId(id:string):Observable<FamilyDetails[]>
  {
    return this._httpClient.get<FamilyDetails[]>(`${environment.apiUrl}/api/FamilyDetail/${id}`);
  }
  getInsuranceDetailsbyUserId(userid:string):Observable<Insurance[]>
  {
    return this._httpClient.get<Insurance[]>(`${environment.apiUrl}/api/Insurance/${userid}`);
  }
  saveInsurancePlan(insurancePlan : InsurancePlan)
  {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/InsurancePlan`,insurancePlan);
  }
}
