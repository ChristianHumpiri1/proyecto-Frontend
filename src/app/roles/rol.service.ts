import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Rol } from './rol';
import { map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  private urlrol:string ='http://localhost:8080/api/roles';
  constructor(private http : HttpClient, private router: Router) { }

  getRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.urlrol + '/all');     
  }
  create(rol:Rol):Observable<Rol>{
    return this.http.post(this.urlrol + '/create', rol)
    .pipe(
      map((response: any)=> response.post as Rol),
      catchError(e =>{
        if(e.status == 400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
  getPostId(id:number): Observable<Rol>{
    return this.http.get<Rol>(`${this.urlrol}/${id}`).pipe(
      catchError(e=>{
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/roles']);
        }
        return throwError(0);
      }));
  }
  update(rol:Rol):Observable<any>{
    return this.http.put<any>(`${this.urlrol}/${rol.idrol}`, rol).pipe(
      catchError(e =>{
        if(e.status == 400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);        
        }
        return throwError(e);
      })
    )
  }
  delete(id:number):Observable<Rol>{
    return this.http.delete<Rol>(`${this.urlrol}/${id}`).pipe(
      catchError(e =>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
}
