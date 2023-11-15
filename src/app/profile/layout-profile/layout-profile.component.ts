import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout-profile',
  templateUrl: './layout-profile.component.html',
  styleUrls: ['./layout-profile.component.css']
})
export class LayoutProfileComponent implements OnInit {

  profileData: any;

  constructor(private api: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    
    this.authService.getProfileData().subscribe(
      (data: any) => {
        data.avatar = this.api.baseMediaURL + data.avatar;
        this.profileData = data
      },
      error => {
        console.error('Ошибка получения данных:', error);
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}

