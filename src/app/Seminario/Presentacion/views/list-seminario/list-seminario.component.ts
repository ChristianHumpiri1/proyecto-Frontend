import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seminario } from 'src/app/Seminario/Seminario';
import { SeminarioService } from 'src/app/Seminario/seminario.service';
import { EditarComponent } from 'src/app/Seminario/views/editar/editar.component';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'adra-list-seminario',
  templateUrl: './list-seminario.component.html',
  styleUrls: ['./list-seminario.component.css']
})
export class ListSeminarioComponent implements OnInit {
  seminarioModel:Seminario= new Seminario();
  semi: Seminario[] = [];
  titulos: string[] = ["ID","fechafin","fechainicio","nombresem" ];
  constructor(private Seminarioservice: SeminarioService, private router:Router) { }
  seminario =new Seminario();
  ngOnInit(): void {
    this.Seminarioservice.getSeminario().subscribe(data =>{
      this.semi= data;
      });
  }

 readAll(){
  this.Seminarioservice.getSeminario()
  .subscribe(
    data =>{
      console.log(data)
      this.semi=data
    },(err) =>{
      console.log("Error en el component Seminario")
    }
  )
}
 saveU(){
  delete this.seminarioModel.idsem;
  this.Seminarioservice.create(this.seminarioModel)
  .subscribe(
    res => {
      this.readAll();
      swal.fire('Nuevo Seminario', `Seminario ${this.seminarioModel.nombresem} creado con exito`, "success")
      this.seminarioModel.fechafin='';
      this.seminarioModel.fechainicio='';
      this.seminarioModel.nombresem='';

    }
  )
}


eliminarse(id: any) {
  this.Seminarioservice.delete(id).subscribe();
  this.readAll();
  swal.fire('Se elimino el seminario');
}

EditarSeminario() {
  alert('editar ' );
  this.Seminarioservice.update(this.seminarioModel).subscribe();
}


}

