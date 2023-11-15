import { Component } from '@angular/core';

@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.css']
})
export class NominationComponent {
  nominations = [
    { name: 'Красота', imageUrl: '/assets/img/krasota.jpg' },
    { name: 'Творчество', imageUrl: '/assets/img/tvorhest.jpg' },
    { name: 'Спорт', imageUrl: '/assets/img/sport.jpg' },
    { name: 'Юмор', imageUrl: '/assets/img/umor.png' },
  ];

}
