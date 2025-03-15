import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { ForgotPaswordComponent } from "./forgot-pasword/forgot-pasword.component";
import { NewPasswordComponent } from './new-password/new-password.component';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,ForgotPaswordComponent,NewPasswordComponent, CreateUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aularma_web';
}
