import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  PersonalDataForm: FormGroup;
  profileData: any;
  showMessage: boolean = false;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private http: HttpClient) {
    this.PersonalDataForm = this.formBuilder.group({
      full_name: [''],
      phone: [''],
      email: [''],
      birth_date: [''],
      vk_link: [''],
      username: [''],
      password: [''],
      password_confirmation: [''],
      avatar: [null]
    });
  }

  ngOnInit(): void {
    this.authService.getProfileData().subscribe((data: any) => {
      this.PersonalDataForm.patchValue(data);
    });
  }



  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file; // Сохраняем выбранный файл

  }

  ProfileUpdate() {
    if (this.PersonalDataForm.valid) {
    const updatedData = this.PersonalDataForm.value;
    const formData = new FormData();

    if (this.selectedFile) {
      formData.append('avatar', this.selectedFile);
    }


    formData.append('full_name', updatedData.full_name);
    formData.append('phone', updatedData.phone);
    formData.append('email', updatedData.email);
    formData.append('birth_date', updatedData.birth_date);
    formData.append('vk_link', updatedData.vk_link);
    formData.append('username', updatedData.username);
    formData.append('password', updatedData.password);
    formData.append('password_confirmation', updatedData.password_confirmation);


    this.authService.putProfileData(formData).subscribe(
      (response: any) => {
        const message = response.message;
        this.showMessage= true;
        this.showMessage = message
        this.refresh();
    },
    (error: any) => {
      this.showMessage = error
    }
    );
    }
}


  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}