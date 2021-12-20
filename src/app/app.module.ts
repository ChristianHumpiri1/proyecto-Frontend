import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptor } from './users/interceptors/token.interceptor';
import { AuthInterceptor } from './users/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes=[
  {path: '', component: PageLoginComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule,AppRoutingModule,HttpClientModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [
  /*{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}*/
    // {provide:MenuService, useClass: MenuService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
