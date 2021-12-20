import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModulosRoutingModule } from './modulos-routing.module';
import { PageModuloComponent } from './presentation/pages/page-modulo/page-modulo.component';
import { ListModulosComponent } from './presentation/views/list-modulos/list-modulos.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageModuloComponent,
    ListModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    SharedModule,
    FormsModule
  ],exports:[PageModuloComponent]
})
export class ModulosModule { }


