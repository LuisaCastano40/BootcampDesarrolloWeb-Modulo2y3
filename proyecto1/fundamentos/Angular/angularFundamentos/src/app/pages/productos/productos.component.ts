import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { FooterComponent} from '../../components/footer/footer.component';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
