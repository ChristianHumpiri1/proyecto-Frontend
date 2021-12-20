import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { Post } from './post';
import { map, catchError} from 'rxjs/operators';
import { AuthService } from '../core/presentation/views/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlpost:string ='http://localhost:8080/api/posts'; 
  private urlpost2:string = "http://localhost:8080/api/posts";
  //https://app-uc-sur.herokuapp.com/api/posts/create
  //http://localhost:9090/api/posts/all
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlpost + '/all', {headers: this.agregarAuthorizationHeader()});    
  }
  create(post:Post):Observable<Post>{    
    return this.http.post(this.urlpost + '/create', post)
    .pipe(
      map((response: any)=> response.post as Post),
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
  getPostId(id:number): Observable<Post>{
    return this.http.get<Post>(`${this.urlpost}/${id}`).pipe(
      catchError(e=>{
        if(e.status != 401 && e.error.mensaje){
          this.router.navigate(['/posts']);
        }
        return throwError(0);
      }));
  }
  update(post:Post):Observable<any>{
    return this.http.put<any>(`${this.urlpost}/${post.idpost}`, post).pipe(
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
  delete(id:number):Observable<Post>{
    return this.http.delete<Post>(`${this.urlpost}/${id}`).pipe(
      catchError(e =>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
}
