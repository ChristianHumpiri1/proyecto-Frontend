import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeminarioRoutingModule } from './seminario-routing.module';
import { PageSeminarioComponent } from './Presentacion/pages/page-seminario/page-seminario.component';
import { ListSeminarioComponent } from './Presentacion/views/list-seminario/list-seminario.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './views/editar/editar.component';


@NgModule({
  declarations: [
    PageSeminarioComponent,
    ListSeminarioComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    SeminarioRoutingModule,
    SharedModule,
    FormsModule
  ],exports:[ListSeminarioComponent]
})
export class SeminarioModule { }
