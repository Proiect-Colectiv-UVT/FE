import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseURL = "http://localhost:3000/polls";

  constructor( private http : HttpClient) { }

  createPoll(poll:Poll) : Observable<Object>{
    return this.http.post(`${this.baseURL}`, poll);
  }
  getPoll() : Observable<Poll[]>{
    return this.http.get<Poll[]>(`${this.baseURL}`);
  }
  getPollById(id:number): Observable<Poll>{
    return this.http.get<Poll>(`${this.baseURL}/${id}`);

  }
}