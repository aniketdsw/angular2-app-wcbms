import { Component } from '@angular/core';
import { Hero }    from './hero';
import { Login }    from './login';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'home.html',
  styleUrls:['../customcss/retrieve.css','../customcss/submitbuttonanimation.scss','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'],
  providers: [PostsService]
  
})
export class HomeComponent  { constructor(private postsService: PostsService){}
posts:Obj ;
str:XMLDocument;
 urlHome:string="http://localhost:80/bugzilla/rest.cgi/bug?assigned_to=aniketdsw@gmail.com";



       private getid(): void {
  
        this.postsService.getPosts(this.urlHome).subscribe(posts => {
        this.posts=posts;
             console.log(posts);
   });
        
  }

}


interface Obj
{}













