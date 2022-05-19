import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
const API_URL = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userURL='http://localhost:8080/user';
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }
  getUser(id:Number):Observable<User>{
    return this.http.get<User>(`${this.userURL}/${id}`);
  }
}
