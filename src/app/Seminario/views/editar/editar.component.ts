import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seminario } from '../../Seminario';
import { SeminarioService } from '../../seminario.service';

@Component({
  selector: 'adra-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  seminarioModel:Seminario= new Seminario();
  semi: Seminario[] = [];
  constructor( private seminarioservice : SeminarioService,
               private router: Router,
               private activatedroute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.activatedroute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.seminarioservice.get(id).subscribe(
            es=>this.seminarioModel=es
          );
        }
      }
    );


  }
}

