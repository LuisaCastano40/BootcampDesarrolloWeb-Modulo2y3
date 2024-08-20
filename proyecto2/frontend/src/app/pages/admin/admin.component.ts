import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  // Inyectar servicios y dependencias
  loginService = inject(LoginService);
  userService = inject(UserService);
  toastrService = inject(ToastrService);

  // variables que necesitamos
  allUsers : any[] = [];

  // Métodos que necesito

  // mostrar mis usuarios
  obtenerUsuarios(){
    const token = this.loginService.getToken();

    // EL TOKEN SE PASA EN LA CAPECERA DE LAS PETICIONES -> HEADER
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    console.log(headers)
    this.userService.getUsers({headers}).subscribe(
      (res:any) => {
        // validación de que si haya respuesta
        if(res){
          this.allUsers = res.usuarios;
          console.log(this.allUsers)
          this.toastrService.success('Se muestran todos los usuarios')
        }
      }
    );
  }
  // eliminar mis usuarios
  borrarUsuarios(){
  }
  cierreSesion(){
    this.loginService.logout();
  }
  // ciclo de vida -> cuando se crea el componente
  ngOnInit(){
    this.obtenerUsuarios();
  }

}
