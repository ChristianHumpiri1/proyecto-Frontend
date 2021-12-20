import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/presentation/views/login/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'adra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'adra-app-model';
  status: boolean = false;
  expanded = true;
  user:any;
  text:string="chris";
  clickEvent(){
      this.status = !this.status;       
  }
  constructor(public authService: AuthService, private router:Router){

  }
  ngOnInit(){

    //this.user = sessionStorage.getItem("usuario.usuario")
  }
  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username} has cerrado sesión con exito`, 'success');
    this.router.navigate(['/login']);
  }
}
