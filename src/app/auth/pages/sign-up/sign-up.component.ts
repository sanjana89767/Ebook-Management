import { Component,OnInit } from '@angular/core';
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
// import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from '../../api/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatCardModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signupform: FormGroup;
  initialValue: any;

  constructor(private fb: FormBuilder,private toastr:ToastrService,private service:SignUpService) {
    this.signupform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      reenterpassword: ['', Validators.required]
    });
  }

  // ngOnInit(): void {
  //   this.initialValue = this.loginForm.value;
  // }

  Save() {
    const formData = this.signupform.value;
    console.log(formData);

    if (this.signupform.valid && formData.password === formData.reenterpassword) {
      this.service.registerdata(formData);
      this.toastr.info("Data Saved Successfully", "", { timeOut: 5000 });
    } else {
      //this.toastr.error("Passwords do not match!", "", { timeOut: 5000 });
    }
  }
  
}
