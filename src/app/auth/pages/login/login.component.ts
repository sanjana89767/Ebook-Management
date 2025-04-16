import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,FormBuilder,FormGroup
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../api/login.service';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCardModule,RouterModule,MatIcon],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 loginForm: FormGroup;
 hidePassword = true; 

  constructor(private fb: FormBuilder,private toastr:ToastrService,private service:LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.service.login(username, password).subscribe((success:any) => {
        if (success) {
          this.toastr.success("Login Successful!", "", { timeOut: 3000 });
          this.router.navigate(['/dashboard']);
        } else {
          this.toastr.error("Invalid username or password!", "", { timeOut: 3000 });
        }
      });
    }
  }
  

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }
  
  get token() {
    return this.service.getToken();
  }
}
