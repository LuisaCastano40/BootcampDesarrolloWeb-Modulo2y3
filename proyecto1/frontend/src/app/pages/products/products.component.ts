import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  dataService = inject(ProductsService);
  allProducts: any[] = [];

  //obtener datos
  obtenerDatos() {
    this.dataService.getProducts().subscribe((res: any) => {
      if (res) {
        console.log('res', res);
        this.allProducts = res;
      } else {
        console.error('hubo un error');
      }
    });
  }

  ngOnInit() {
    this.obtenerDatos();
    // this.crearDatos();
  }


}
