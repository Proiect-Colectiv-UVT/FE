import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }
}
