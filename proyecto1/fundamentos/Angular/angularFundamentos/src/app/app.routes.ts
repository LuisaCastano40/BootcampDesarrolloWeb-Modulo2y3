import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

//1. IMPORTAR LAS QUE VAN A SER NUESTRAS PÁGINAS EN EL APLICATIVO
//2. DEFINIR EN QUÉ RUTA DEBE APARECER NUESTRAS PÁGINAS
export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: NoEncontradoComponent}
];

