import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRolComponent } from './presentation/pages/page-rol/page-rol.component';

const routes: Routes = [
  {path: '', component: PageRolComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
