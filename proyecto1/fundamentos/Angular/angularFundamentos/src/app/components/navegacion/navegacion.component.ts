import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  //ESTO SE USA EN HTML -> Para poder usar el comoponente
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})

//ESTA CLASE ES LA QUE DEBO IMPORTAR
export class NavegacionComponent {

}
