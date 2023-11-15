import { Component, OnInit } from '@angular/core';
import lgZoom_es5 from 'lightgallery/plugins/zoom'
import lgThumbnail_es5 from 'lightgallery/plugins/thumbnail'
import {BeforeSlideDetail} from "lightgallery/lg-events";
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

nominations: any[] = [];
filteredWorks: any[] = [];
limit: number = 2;
selectedPhotoSize: number = 4;
photosList: any[] = [];
isMenuPanelOpen = false;
selectedPhotoCategory: number | null = null;

 constructor(private apiservice: ApiService, private authservice: AuthService) {}

 toggleMenuPanel() {
   this.isMenuPanelOpen = !this.isMenuPanelOpen;
 }

 changePhotoSize(size: number) {
  this.selectedPhotoSize = size;
}


ngOnInit(): void {
  this.apiservice.getPhotoList().subscribe((data: any) => {
    this.photosList = data.map((photos:any) => {
      photos.image = this.apiservice.baseMediaURL + photos.image;
      console.log(photos)
      return photos;
    });
  });


  this.apiservice.getCategories().subscribe((data: any) => {
    this.nominations = data.map((category: any) => {
      category.image = this.apiservice.baseMediaURL + category.image;
      return category;
    });
  });
}

filterByCategory(categoryId: number) {
  this.selectedPhotoCategory = categoryId;
  this.filterWorksByCategory();
  console.log(categoryId)
}

filterWorksByCategory() {
  if (this.selectedPhotoCategory) {
    this.filteredWorks = this.photosList.filter((photo: any) => {
      return photo.photo_category === this.selectedPhotoCategory;
    });
  } else {
    // Если не выбрана категория, отобразить все работы
    this.filteredWorks = this.photosList;
  }
}



  settings = {
    selector: '.photoContestVoting__card',
    speed: 500,
    thumbnail: false,
    download: false,
    zoom: false,
    plugins: [lgZoom_es5, lgThumbnail_es5],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const {index, prevIndex} = detail;
    console.log(index, prevIndex);
  };

}


