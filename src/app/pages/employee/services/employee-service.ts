import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee-dao';
import { EmploymentType } from '../model/employement-type';
import { Designation } from '../model/designation-dao';
import { UserRole } from 'src/app/model/login/user-role';
import { User } from '../model/user-dto';
import { Employment } from '../../auth/dao/employment-dao';
import { FamilyDetails } from '../model/employee-detail-dao';
import { Acadamics } from '../model/acadamics-dao';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  confirm(arg0: { message: string; header: string; icon: string; accept: () => void; reject: () => void; }) {
    throw new Error('Method not implemented.');
  }
  employment_Histories: Employment[] = [];
  user: User = new User();
  constructor(private _httpClient: HttpClient) { }

  getAllUsers(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${environment.apiUrl}/api/User`);
  }
  saveDesignation(data: any) {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/Designation`, data);
  }
  getAllEmpTypes(): Observable<EmploymentType[]> {
    return this._httpClient.get<EmploymentType[]>(`${environment.apiUrl}/api/Designation/GetEmpTypes`);
  }
  getAllDesignations(): Observable<Designation[]> {
    return this._httpClient.get<Designation[]>(`${environment.apiUrl}/api/Designation`);
  }
  deleteDesignation(id: string) {
    return this._httpClient.delete<any>(`${environment.apiUrl}/api/Designation/${id}`);
  }
  updateDesignation(id: string) {
    return this._httpClient.put<any>(`${environment.apiUrl}/api/Designation/`, id);
  }
  saveUser() {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/User`, this.user);
  }
  getParent(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${environment.apiUrl}/api/User/GetParent`);
  }
  getAllUserRoles(): Observable<UserRole[]> {
    return this._httpClient.get<UserRole[]>(`${environment.apiUrl}/api/Designation/GetUserRoles`);
  }
  uploadImage(formData: any) {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/Upload`, formData);
  }
  getAllEmploymentRecord(): Observable<Employment[]> {
    return this._httpClient.get<Employment[]>(`${environment.apiUrl}/api/EmploymentHistory`);
  }
  saveEmploymentRecord() {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/EmploymentHistory`, this.employment_Histories);
  }
  getUserbyId(id: string): Observable<User> {
    return this._httpClient.get<User>(`${environment.apiUrl}/api/User/${id}`);
  }
  getFamilyDetailsbyUserId(id: string): Observable<FamilyDetails[]> {
    return this._httpClient.get<FamilyDetails[]>(`${environment.apiUrl}/api/FamilyDetail/${id}`);
  }
  getEmploymentRecordByUserId(id: string): Observable<Employment[]> {
    return this._httpClient.get<Employment[]>(`${environment.apiUrl}/api/EmploymentHistory/${id}`);
  }

  getAcademictRecordByUserId(id: string): Observable<Acadamics[]> {
    return this._httpClient.get<Acadamics[]>(`${environment.apiUrl}/api/EmployeeAcademic/${id}`);
  }
  deleteUser(id: string) {
    return this._httpClient.delete<any>(`${environment.apiUrl}/api/User/${id}`);
  }
}
