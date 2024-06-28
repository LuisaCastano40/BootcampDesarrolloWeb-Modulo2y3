import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';

// 1. Debo importar el componente que quiero usar, y decirle que lo quiero
//usar
@Component({
  selector: 'app-root',
  standalone: true,
  //Acá especifica las importaciones que va a usar
  imports: [RouterOutlet, NavegacionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Componente principal
export class AppComponent {
 
  //ACÁ VA LA LÓGICA GENERAL DE SU PROYECTO

}
