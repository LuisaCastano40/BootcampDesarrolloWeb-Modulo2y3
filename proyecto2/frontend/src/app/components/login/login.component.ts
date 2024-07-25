import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
        // num : number = 0
        // tex : string = ''
        // bool: boolean = false
       @Input() toggleRegister: () => void = () => {};

  // Recibir | nombre a lo que entra : tipo  = inicialicemos
}
