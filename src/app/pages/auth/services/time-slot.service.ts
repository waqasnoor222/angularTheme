import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeSlot } from '../dto/time-slot-dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeSlotService {
  timeslot: TimeSlot=new TimeSlot();
  constructor(private  _httpClient : HttpClient) { }

  saveTimeSlot() {
    return this._httpClient.post<any>(`${environment.apiUrl}/api/TimeSlot`, this.timeslot);
  }
  updateTimeSlot()
  {
    return this._httpClient.put<any>(`${environment.apiUrl}/api/TimeSlot/${this.timeslot.id}`,this.timeslot);
  }
  getAllTimeSlots():Observable<TimeSlot[]>
  {
    return this._httpClient.get<TimeSlot[]>(`${environment.apiUrl}/api/TimeSlot`);
  }
  deleteTimeSlot(id:string)
  {
    return this._httpClient.delete<any>(`${environment.apiUrl}/api/TimeSlot/${id}`);
  }
  getTimeSlotById(id:string)
  {
    return this._httpClient.delete<any>(`${environment.apiUrl}/api/TimeSlot/${id}`);
  }
}
