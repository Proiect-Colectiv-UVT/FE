import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../authentication.service';
import { TokenStorageService } from '../token-storage.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id!:number;
  user!:User;
  constructor(public authService: AuthService, private route: ActivatedRoute,private userService:UserServiceService) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data => {this.user=data;});
  }
  
}
  
