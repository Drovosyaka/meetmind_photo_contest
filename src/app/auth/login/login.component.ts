import { Component, OnInit, } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string | null = null;
  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}





  submitLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username_user')?.value;
      const password = this.loginForm.get('password_user')?.value;

      this.authService.login(username, password).subscribe(
        (response: any) => {
          this.router.navigate(['/profile/data']);
          this.authService.saveToken(response.access);
          
          this.errorMessage = null;
        },
        (error: any) => {
          if (error.status === 423) {
            this.errorMessage = 'Ваш аккаунт заблокирован';
          } else if (error.status === 400) {
            this.errorMessage = 'Ошибка при входе. Пожалуйста, проверьте введённые данные.';
          } else {
            this.errorMessage = 'Сервер не отвечает';
          }
        }
      );
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username_user': new FormControl('', Validators.required),
      'password_user': new FormControl('', Validators.required)
    });
  }
}
