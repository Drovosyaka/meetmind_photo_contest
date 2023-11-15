import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-add-photo',
  templateUrl: './profile-add-photo.component.html',
  styleUrls: ['./profile-add-photo.component.css']
})
export class ProfileAddPhotoComponent implements OnInit {
  photoForm: FormGroup;
  selectedNominationId: any;
  selectedCategory: number;
  nominations: any;
  errorMessage: string;
  fileSelected: File;
  autor: number;
  photoSuccessfullyUploaded: boolean = false;
  confirmForm: any;
  imageSrc: any;
  imageName: string;
  uploadImageProgress: number = 0;

  errorMessages: { [key: string]: string } = {
    image: '',
    copyright: '',
    vk_link: '',
    name_work: '',
    description: '',
    photo_place: '',
    processing: '',
    model_release: '',
    additional_info: '',
  };


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authservice: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
    this.photoForm = this.formBuilder.group({
      photo_category: [null, Validators.required],
      user: [this.autor || null, Validators.required],
      image: [null, Validators.required],
      copyright: [false, Validators.required],
      vk_link: [''],
      name_work: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      photo_place: ['', [Validators.required, Validators.maxLength(200)]],
      processing: ['', Validators.required],
      model_release: ['', Validators.required],
      additional_info: ['', Validators.required],
    });
  
    this.authservice.getUserData().subscribe((data: any) => {
      this.autor = data.id;
      
      // Проверяем, что this.autor не является null или undefined
      if (this.autor) {
        this.photoForm.get('user')!.setValue(this.autor);
      }
    });
  }
  


  onFileSelected(event: any) {
    this.fileSelected = event.target.files[0];
    this.imageName = this.fileSelected.name;

    if (this.fileSelected) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(this.fileSelected);
    }
  }

  showForm(nominationId: any) {
    this.selectedNominationId = nominationId;
    this.selectedCategory = nominationId;
    this.photoForm.get('photo_category')?.setValue(nominationId);
  }

  getCategories() {
    this.apiService.getCategories().subscribe(
      (data: any) => {
        this.nominations = data.map((category: any) => {
          category.image = this.apiService.baseMediaURL + category.image;
          return category;
        });
      }
    );
  }
  


  SubmitNomination() {
    if (this.photoForm.valid) {

      const updatedData = this.photoForm.value;
      const formData = new FormData();
  
      if (this.fileSelected) {
        formData.append('image', this.fileSelected);
      }

      formData.append('photo_category', updatedData.photo_category);
      formData.append('user', updatedData.user);
      formData.append('copyright', updatedData.copyright);
      formData.append('birth_date', updatedData.birth_date);
      formData.append('vk_link', updatedData.vk_link);
      formData.append('name_work', updatedData.name_work);
      formData.append('description', updatedData.description);
      formData.append('photo_place', updatedData.photo_place);
      formData.append('processing', updatedData.processing);
      formData.append('model_release', updatedData.model_release);
      formData.append('additional_info', updatedData.additional_info);


      this.apiService.postPhotoUser(formData).subscribe(
        (response) => {
          console.log('Фото успешно загружено', response);
          this.confirmForm = response
          this.photoSuccessfullyUploaded = true;
          
        },
        (error) => {
          console.error('Ошибка при загрузке фото', error);
          if (error instanceof HttpErrorResponse && error.error) {
            for (const field in error.error) {
              if (Object.prototype.hasOwnProperty.call(error.error, field)) {
                if (this.errorMessages[field]) {
                  this.errorMessages[field] = error.error[field][0];
                }
              }
            }
          }
        }
      );
    }
  }
}





