import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/users/model/usuario';

import swal from 'sweetalert2';
import { AuthService } from './auth.service';


@Component({
  selector: 'adra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  constructor(public authService: AuthService, private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }
  login():void{
  this.authService.login(this.usuario).subscribe(response =>{
    console.log(response);
    this.authService.guardarUsuario(response.access_token);
    this.authService.guardarToken(response.access_token);
    this.router.navigate(['/users']);
    let usuario = this.authService.usuario;
    
    swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con exito!`)
  },error=>{
      if(error.status == 400){
        swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
      }
  }  
  );
  }
  
}
