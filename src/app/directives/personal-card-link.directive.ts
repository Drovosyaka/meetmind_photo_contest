import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd,} from '@angular/router';

@Directive({
  selector: '[activeLink]'
})
export class PersonalCardDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url.split('/profile/'); // Получаем текущий URL
        const linkUrl = this.router.parseUrl(this.router.url); // Разбираем URL для проверки

        // Проверяем, содержит ли текущий путь или его родительские пути часть активного URL
        if (linkUrl.toString().includes(this.el.nativeElement.getAttribute('routerLink'))) {
          this.renderer.addClass(this.el.nativeElement, 'personalCard__link--current');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'personalCard__link--current');
        }
      }
    });
  }
}






