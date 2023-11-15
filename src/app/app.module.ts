import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NominationComponent } from './components/nomination/nomination.component';
import { PrizesComponent } from './components/prizes/prizes.component';
import { StagesComponent } from './components/stages/stages.component';
import { VotingComponent } from './components/voting/voting.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContestComponent } from './theme/layout/contest/contest.component';
import { ContestModule } from "./theme/layout/contest/contest.module";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { ProfileAddPhotoComponent } from './profile/profile-add-photo/profile-add-photo.component';
import { LayoutProfileComponent } from './profile/layout-profile/layout-profile.component';
import { PersonalCardDirective } from './directives/personal-card-link.directive';
import { ContactsComponent } from './pages/contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    NominationComponent,
    PrizesComponent,
    StagesComponent,
    VotingComponent,
    LoginComponent,
    RegisterComponent,
    ContestComponent,
    ProfileAddPhotoComponent,
    ProfileDataComponent,
    LayoutProfileComponent,
    PersonalCardDirective,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    LightgalleryModule,
    HttpClientModule,
    AppRoutingModule,
    ContestModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
   }
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
