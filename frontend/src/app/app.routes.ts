import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent }, //rota pro login
    { path: '', redirectTo: 'login', pathMatch: 'full' }
   
];
