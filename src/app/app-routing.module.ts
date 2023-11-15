import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ContestComponent} from "./theme/layout/contest/contest.component";
import { ProfileAddPhotoComponent } from './profile/profile-add-photo/profile-add-photo.component';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutProfileComponent } from './profile/layout-profile/layout-profile.component';
import { ContactsComponent } from './pages/contacts/contacts.component';



const routes: Routes =[
  {path: '', component: ContestComponent,
  canActivate: [],},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'profile',
    component: LayoutProfileComponent,
    children: [
      {path: 'data', component: ProfileDataComponent},
      {path: 'add-photo', component: ProfileAddPhotoComponent}
    ],
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
  },
  {path: '**', component: ContestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
