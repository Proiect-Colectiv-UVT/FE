import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Result } from './result';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseURL = "http://localhost:8080/activePolls";
  private voteURL = "http://localhost:8080/poll";
  private userURL!: string;
  private vote2URL!:string;
  polls:Poll[]=[];
  constructor( private http : HttpClient, private router:Router) { }

  createPoll(poll:Poll) : Observable<Object>{
    
    this.userURL="http://localhost:8080/user/"+sessionStorage.getItem('id')+"/poll/add";
    return this.http.put(`${this.userURL}`, poll);
  }
  
  votePoll(pollID:number,result:Result):Observable<Object>{
    console.log("http://localhost:8080/user/"+sessionStorage.getItem('id')+"/poll/"+pollID+"/result/add", result);
    this.vote2URL="http://localhost:8080/user/"+sessionStorage.getItem('id')+"/poll/"+pollID+"/result/add";
    return this.http.put(`${this.vote2URL}`, result);
    
  }
  getPoll() : Observable<Poll[]>{
    return this.http.get<Poll[]>(`${this.baseURL}`);
  }
  
  getPollById(id:number): Observable<Poll>{
    return this.http.get<Poll>(`${this.voteURL}/${id}`);
  }
}