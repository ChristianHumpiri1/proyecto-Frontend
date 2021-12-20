import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListRolesComponent } from './presentation/views/list-roles/list-roles.component';
import { PageRolComponent } from './presentation/pages/page-rol/page-rol.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageRolComponent,
    ListRolesComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule, SharedModule,
  ],exports:[PageRolComponent]
})
export class RolesModule { }
