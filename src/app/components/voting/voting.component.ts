import { Component } from '@angular/core';
import lgZoom_es5 from 'lightgallery/plugins/zoom'
import lgThumbnail_es5 from 'lightgallery/plugins/thumbnail'
import {BeforeSlideDetail} from "lightgallery/lg-events";


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {

  voting_test = [
    {id: 1 ,photo_title: 'Природа' , photo_author: 'ФИО', photo_img: '/assets/img/krasota.jpg'},
    {id: 2 ,photo_title: 'Природа' , photo_author: 'ФИО', photo_img: '/assets/img/krasota.jpg'},
    {id: 3 ,photo_title: 'Природа' , photo_author: 'ФИО', photo_img: '/assets/img/krasota.jpg'},
  ]

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


