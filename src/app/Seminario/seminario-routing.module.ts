import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSeminarioComponent } from './Presentacion/pages/page-seminario/page-seminario.component';
import { EditarComponent } from './views/editar/editar.component';

const routes: Routes = [
  {path:'',component:PageSeminarioComponent},
  {path:'form/:id',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeminarioRoutingModule { }
