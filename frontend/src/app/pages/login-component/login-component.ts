import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ← ADICIONE ISTO


@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  email: string =''
  senha: string =''

  login(){
    console.log(`Email e senha logados: ${this.email} / ${this.senha}`)

    //...
  }
}
