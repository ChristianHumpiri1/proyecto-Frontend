import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/users/usuario';

@Component({
  selector: 'adra-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  titulos: string[] = ["ID","USERNAME","PASSWORD","ESTADO", "ACCION"];
  filas: Usuario[] =[];
  constructor( ) { }

  ngOnInit(): void {
  }

}
