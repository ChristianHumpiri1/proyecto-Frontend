import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    TitleComponent,
    TableComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatFormFieldModule,MatPaginatorModule
  ],
  exports: [
    TitleComponent,
    TableComponent,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
