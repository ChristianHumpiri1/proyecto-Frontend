import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Modulo } from 'src/app/modulos/modulo';
import { ModuloService } from 'src/app/modulos/modulo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'adra-list-modulos',
  templateUrl: './list-modulos.component.html',
  styleUrls: ['./list-modulos.component.css']
})
export class ListModulosComponent implements OnInit {
  moduloModel:Modulo= new Modulo();
  filas: Modulo[]=[];
  titulos: string[] = ["ID","Nombre","APELLIDO","APELLIDO","CORREO","FECHA","MODULO","SESION","RECURSO" ];
  constructor(private moduloService: ModuloService, private router:Router) { }
  modulo =new Modulo();
  ngOnInit(): void {
    this.readAll();
  }
  readAll(){
    this.moduloService.getModulo()
    .subscribe(
      data =>{
        console.log(data)
        this.filas=data
      },(err) =>{
        console.log("Error en el component Modulo")
      }
    )
  }
 save(){
  delete this.moduloModel.ID_MODULO;
  this.moduloService.create(this.moduloModel)
  .subscribe(
    res => {
      this.readAll();
      swal.fire('Nuevo Modulo', `Modulo ${this.moduloModel.NO_PERSONA} creado con exito`, "success")
      this.moduloModel.NO_PERSONA='';
      this.moduloModel.AP_PATERNO='';
      this.moduloModel.AP_MATERNO='';
      this.moduloModel.NO_CORREO='';
      this.moduloModel.FE_INSCRITO='';
      this.moduloModel.NO_MODULO='';
      this.moduloModel.NO_SESION='';
      this.moduloModel.NO_RECURSO='';
    }
  )

}
 /*editarmodulo(id){
     this.router.navigate(["editar", id])
 }*/

}
