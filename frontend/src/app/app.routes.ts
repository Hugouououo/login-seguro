import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';
import { LogadoComponent } from './pages/logado-component/logado-component';
import { CriarLoginComponent } from './pages/criar-login-component/criar-login-component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logado', component: LogadoComponent },
  { path: 'criar-login', component: CriarLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
