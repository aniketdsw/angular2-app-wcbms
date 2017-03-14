import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import { Comments }    from './comment';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: `user.retrieve.html`,
styleUrls:['../customcss/retrieve.css','../customcss/submitbuttonanimation.scss','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'],
  providers: [PostsService]
})
export class UserComponent  { 
  

    urlretrieve: string;
    urlcomment: string;
    urlstr : string="http://localhost//bugzilla/rest.cgi/bug/";
    urlstrcomment : string="http://localhost//bugzilla/rest.cgi/bug/";
    urlcommentpost:string="http://localhost//bugzilla/rest.cgi/bug/";
posts:Obj2 ;
commentposts:Obj2;
value2:string;

formFirstSubmit: boolean = false;
  formProcessing: boolean = false;

constructor(private postsService: PostsService){
    
    
}

onSubmit(event:Event) {
    event.preventDefault();

    this.formFirstSubmit = true;
    this.formProcessing = true;
    
    /* After 2 seconds, finish submitting */
    setTimeout(() => {
      this.formProcessing = false;
    }, 2000);
  }

        private getid(value: string): void {
        this.urlretrieve=this.urlstr;
        this.urlretrieve += value;
        this.urlcomment=this.urlstrcomment;
        this.urlcomment += value +"/comment";
        this.value2=value;
        value='';
      
        this.postsService.getPosts(this.urlretrieve).subscribe(posts => {
        this.posts=posts;
        this.urlretrieve='';
      
   });
        
       console.log('this.urlcomment   '+this.urlcomment);
        this.postsService.getPosts1(this.urlcomment).subscribe(commentposts => {
        this.commentposts=commentposts;
        this.urlcommentpost=this.urlcomment;
        this.urlcomment='';
        console.log(commentposts);
        console.log('urlcommentposts'+this.urlcommentpost);
    
    });
        }
       
model=new Comments('',false,true,'','');

    private postid(comm: string):void{
        this.model = new Comments(comm,false,true,'aniketdsw@gmail.com','bugs@123');
            console.log('urlcommentposts2'+this.urlcommentpost);
           if (!this.model) { return; }
           else{
            this.postsService.addPostsComment(this.model,this.urlcommentpost)
            .subscribe(
            model => {this.model=model
           
            });
            }
         }

}
interface Obj1{
}
interface Obj2{
}