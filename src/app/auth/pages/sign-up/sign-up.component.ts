import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,FormBuilder,FormGroup
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from '../../api/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCardModule,RouterModule,MatIcon],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signupform: FormGroup;
  initialValue: any;
  hidePassword = true; 

  constructor(private fb: FormBuilder,private toastr:ToastrService,private service:SignUpService) {
    this.signupform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      reenterpassword: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword; 
  }

  Save() {
    const formData = this.signupform.value;
    console.log(formData);

    if (this.signupform.valid && formData.password === formData.reenterpassword) {
      this.service.registerdata(formData);
      this.toastr.info("Account Created Successfully", "", { timeOut: 5000 });
      this.reset();
    } else {
      //this.toastr.error("", "", { timeOut: 5000 });
    }
  }

  reset(){
    this.signupform.patchValue({
      username: '',
      email: '',
      password: '',
      reenterpassword: ''
    });
    Object.keys(this.signupform.controls).forEach(key => {
      this.signupform.get(key)?.setErrors(null);
    });
  }
  
}
