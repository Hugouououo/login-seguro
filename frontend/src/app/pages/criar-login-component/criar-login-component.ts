import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-login-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './criar-login-component.html',
  styleUrl: './criar-login-component.scss',
})
export class CriarLoginComponent {

  loginForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    senha2: ['', Validators.required],
    });
  }

  confirmarSenha(): boolean{
    const senha1 = this.loginForm.get('senha')?.value
    const senha2 = this.loginForm.get('senha2')?.value
    if (senha1 === senha2) {
      return true
    } else { return false }
  }

  criar(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/login-criado']);
    }
  }
}
