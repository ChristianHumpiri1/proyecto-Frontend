import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageModuloComponent } from './presentation/pages/page-modulo/page-modulo.component';

const routes: Routes = [
  {path:'',component:PageModuloComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
