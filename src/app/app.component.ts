import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './authentication.service';
import { TokenStorageService } from './token-storage.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
 user!: User;
  constructor(public authService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   
 
}
