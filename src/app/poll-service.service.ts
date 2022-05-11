import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseURL = "http://localhost:8080/polls";
  private voteURL = "http://localhost:8080/poll";
  private userURL!: string;
  constructor( private http : HttpClient) { }

  createPoll(poll:Poll) : Observable<Object>{
    
    this.userURL="http://localhost:8080/user/"+sessionStorage.getItem('id')+"/poll/add";
    return this.http.put(`${this.userURL}`, poll);
  }
  getPoll() : Observable<Poll[]>{
    return this.http.get<Poll[]>(`${this.baseURL}`);
  }
  getPollById(id:number): Observable<Poll>{
    return this.http.get<Poll>(`${this.voteURL}/${id}`);
  }
}