import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Inicio'},
    {path: 'productos', component: ProductsComponent, title:'Productos'},
    {path: 'login', component: LoginComponent, title:'Inicio de Sesión'},
    {path: 'admin', component: AdminComponent, title:'Administrador'},
    {path: '**', component: NoEncontradoComponent, title:'404'}
];
