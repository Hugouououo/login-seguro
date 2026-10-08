import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})

export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    });
  }

  login(): void {
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }
}
