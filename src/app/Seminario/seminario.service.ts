import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../core/presentation/views/login/auth.service';
import { Seminario } from './Seminario';
import { map, catchError} from 'rxjs/operators';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class SeminarioService {
  private urlseminario:string ='http://localhost:8080/api/seminario';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }
  getSeminario():Observable<Seminario[]>{
    return this.http.get<Seminario[]>(this.urlseminario + '/all', {headers: this.agregarAuthorizationHeader()});
  }
 create(seminario:Seminario):Observable<Seminario>{
    return this.http.post(this.urlseminario + '/create', seminario)
    .pipe(
      map((response: any)=> response.seminario as Seminario),
      catchError(e =>{
        if(e.status == 401){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }



  delete(id:number):Observable<Seminario>{
    return this.http.delete<Seminario>(`${this.urlseminario}/delete/${id}`).pipe(
      catchError(e =>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
  update(seminario:Seminario):Observable<any>{
    return this.http.put<any>(`${this.urlseminario}/update/`, seminario).pipe(
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

   getseminarioid(id:number){
     return this.http.get<Seminario>(this.urlseminario + "/" + id  )
   }
   updateseminario(seminario:Seminario){
     return this.http.put<Seminario>(this.urlseminario+"/"+seminario.idsem,seminario)
   }
   get(id:number):Observable<Seminario>{
     return this.http.get<Seminario>(this.urlseminario+"/"+id);
   }
}



