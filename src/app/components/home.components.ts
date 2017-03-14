import { Component } from '@angular/core';
import { Hero }    from './hero';
import { Login }    from './login';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'home.html',
  styleUrls:['../customcss/submit.css'],
  providers: [PostsService]
})
export class HomeComponent  { constructor(private postsService: PostsService){}
str:XMLDocument;
 urlHome:string="http://localhost:80/bugzilla/buglist.cgi?email1=aniketdsw%40gmail.com&ctype=atom";

model=new Login('aniketdsw@gmail.com','bugs@123');

    private postid(comm: string):void{
       // this.model = new Login('aniketdsw@gmail.com','bugs@123');
         //   this.postsService.getHome(this.model,this.urlHome)
           // .subscribe(
        //    model => {this.model=model
           
          //  });


     this.postsService.addHome(this.urlHome).subscribe(
     str => {str=str

       
    console.log(str);
    });
   }

}


interface Obj
{}













