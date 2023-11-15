import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./navigation/header/header.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import {BannerComponent} from "./navigation/banner/banner.component";

@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    BannerComponent

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
   }
  ],
  imports: [CommonModule]
})



export class ContestModule {

}
