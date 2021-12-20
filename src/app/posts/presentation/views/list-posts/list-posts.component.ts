import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Post } from 'src/app/posts/post';
import { PostService } from 'src/app/posts/post.service';
import swal from 'sweetalert2';
@Component({
  selector: 'adra-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  filas: Post[]=[];
  titulos: string[] = ["ID","Nombre","Descripcion","ACCION"];
  constructor(private postService: PostService, private router:Router) { }
  post =new Post();
  ngOnInit(): void {
       this.postService.getPost().subscribe(data =>{
         this.filas= data;
       });
  }
 add(){
   this.postService.create(this.post);
   swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
}
}
