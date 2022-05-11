import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
      :host ::ng-deep .ui-listbox {
        width: 20em;
        z-index: -1 !important;
      }
      :host ::ng-deep .p-ink {
        display: none !important;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      name: ['']
    });
  }
  ngOnInit() {}
  loginUser() {
    
    this.authService.signIn(this.signinForm.value).subscribe(()=>{

    });
  }
}