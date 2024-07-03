import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  admin = {
    correo: "admin@gmail.com",
    contrasena: "123"
  }

  correo: string = '';
  contrasena: string = '';

  iniciarSesion() {
    if (this.correo === this.admin.correo && this.contrasena === this.admin.contrasena) {
      // Redirigir al usuario a otra página
      alert('Bienvenido Admin');
      this.router.navigate(['/admin']);
      
    } else {
      // Mostrar un mensaje de error o realizar otra acción
      console.log('Correo o contraseña incorrectos');
    }
  }

}
