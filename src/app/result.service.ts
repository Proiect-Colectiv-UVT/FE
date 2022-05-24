import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private resultURL = "http://localhost:8080/results"
  constructor(private http : HttpClient) { }
  getResults() : Observable<Result[]>{
    return this.http.get<Result[]>(`${this.resultURL}`)
  }
}
