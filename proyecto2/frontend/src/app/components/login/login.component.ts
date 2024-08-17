import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

    loginService = inject(LoginService);
        // num : number = 0
        // tex : string = ''
        // bool: boolean = false
       @Input() toggleRegister: () => void = () => {};
  // Recibir | nombre a lo que entra : tipo  = inicialicemos

    // CONECTAR NUESTRO FORMULARIO CON NUESTRO GRUPO
      credentialForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });


    //ME PERMITE OBTENER LAS CREDENCIALES PARA DESPUÉS INICIAR SESIÓN
    
    getCredentials(){
      const email = this.credentialForm.value.email;
      const password = this.credentialForm.value.password;

      // validar que las credenciales son del tipo de dato que recibe la interfaz
      if(typeof email === 'string' && typeof password === 'string'){
        // nos creamos una interfaz de tipo Credentials
        const validarCredenciales: Credentials = {
          email,
          password
        }
        // retorno los datos de la interfaz
        return validarCredenciales;
      }
      
      // si los tipos de datos no corresponden
      return null;
    }

    // Método para controlar el submit
    handleSubmint(){
      const credenciales = this.getCredentials();
      console.log(credenciales);
      // validar que sí se hayan dado las credenciales
      if(credenciales){
        this.loginService.login(credenciales).subscribe({
          // manejar los errores en el front
          next: (res: any) => {
            // acá cuanto todo Ok -> 200
            console.log(res)
            if(res){
              localStorage.setItem('token', res.tokenGenerado)
              this.loginService.redirect();
            }

          },
          // acá es cuando hay un error o un estado diferente al 200
          error: (err)=>{
            alert(err.error.mensaje);
            this.credentialForm.reset();
          }
        })
      }


    }
}
