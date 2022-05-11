import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, config, map, Observable, throwError } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://localhost:8080/user/add';
  endpoint3: string = 'http://localhost:8080/user';
  loginURL: string= `http://localhost:8080/user/login`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(this.endpoint, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(user: User) {
    console.log(user);
    return this.http
    .post<any>(this.loginURL, user)
      .pipe(map(user => {
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', user._id);  
        this.router.navigate(['home']);
        sessionStorage.setItem('id', user.id);
        var data = sessionStorage.getItem('id');
        console.log(data);
      }));
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }     
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint3}/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}