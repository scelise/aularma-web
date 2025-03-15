import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { ForgotPaswordComponent } from "./forgot-pasword/forgot-pasword.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,ForgotPaswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aularma_web';
}
