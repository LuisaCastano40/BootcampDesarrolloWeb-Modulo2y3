import { Component, inject} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  
  dataService = inject(ProductsService);
  
  nombre: string = '';
  precio: number = 0;
  imagen: string = '';
  allProducts: any[] = [];
  showDiv: boolean = false;
  editMode: boolean = false;
  editProductId: string | null = null;

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

  //crear datos
  crearDatos() {

    if (this.nombre === '' || this.imagen === '' || this.precio === 0) {
      alert('Ingrese todos los campos');
    } else {

      console.log(this.nombre, this.imagen, this.precio);
      this.dataService.createProduct(this.nombre, this.imagen, this.precio)
        .subscribe((res: any) => {
          if (res) {
            console.log('res', res);
            this.obtenerDatos();
           
            
          } else {
            console.error('hubo un error');
          }
        });
    }
  }

  //modificar productos
  //modificar productos
 identificarId(id:string) {
   this.editProductId = id;
    this.editMode = true;
    this.showDiv = true;
    console.log(this.editProductId);
  }

  modificarProducto() {

    console.log('entré');
    console.log(this.editProductId, this.nombre, this.imagen, this.precio);
    if (this.nombre === '' || this.imagen === '' || this.precio === 0) {
      alert('Ingrese todos los campos');
    } else if (this.editProductId) {
      this.dataService.updateProduct(this.editProductId, this.nombre, this.imagen, this.precio)
        .subscribe((res: any) => {
          if (res) {
            console.log('res', res);
            this.obtenerDatos();
            this.toggleDiv();
          } else {
            console.error('hubo un error');
          }
        });
    }
  }

  //Borrar productos
  borrarProducto(id: string) {
    console.log('producto a borrar: ', id);
    this.dataService.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        console.log('res', res);
        this.obtenerDatos();
      } else {
        console.error('hubo un error');
      }
    });
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
    if (!this.showDiv) {
      this.nombre = '';
      this.imagen = '';
      this.precio = 0;
      this.editMode = false;
      this.editProductId = null;
    }
  }


  limpiarCampos(){
    this.nombre === '';
    this.imagen === '';
    this.precio === 0;
  }
  ngOnInit() {
    this.obtenerDatos();
    // this.crearDatos();
  }

}
