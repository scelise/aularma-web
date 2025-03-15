import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pasword',
  standalone: true,
  imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      FormsModule
    ],
  templateUrl: './forgot-pasword.component.html',
  styleUrl: './forgot-pasword.component.css'
})
export class ForgotPaswordComponent {  

  logoPath = 'assets/images/logo.png';
  backgroundPath = 'assets/images/background.jpg';

  constructor(private router: Router) {}
  
  irAResetPassword() {
    this.router.navigate(['/newpassword']);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

}
