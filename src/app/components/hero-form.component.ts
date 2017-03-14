import { Component } from '@angular/core';
import { Hero }    from './hero';
import {PostsService} from '../services/posts.service';
@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls:['../customcss/submit.css'],
  providers: [PostsService]
})
export class HeroFormComponent {
 constructor(private postsService: PostsService){
    console.log('hey');
    
}
components = ['Disturbance Recorder', 'Cyber Security Logger',
            'User Account Management', 'Tracking Relay Controller'];

  versions=['1','2','3'];
  ncrnumberprefixs=['IN','US','CH','DE'];
  priorities=['Lowest','Low','Normal','High','Highest'];
  severities=['Blocker','Critical', 'Major', 'Normal', 'Minor' ,'Trivial' ,'Enhancement'];
  model=new Hero('SDM600 Substation Automation','','','','','','','','','','','','','','','','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  
    private postid(product: string,component: string,summary: string,description: string,version: string,querynumberprefix: string,ncrnumberprefix: string,
      ncrcoordinator: string,priority: string,severity: string):void{
        this.model = new Hero(product,component,summary,description,version,querynumberprefix,ncrnumberprefix,ncrcoordinator,priority,severity,'aniketdsw@gmail.com','bugs@123','unspecified','All','All','TestComponent','TestProduct');

           if (!this.model) { return; }
           else{
        this.postsService.addPosts(this.model)
            .subscribe(
            model => {this.model=model
            console.log('model'+this.model);
            });
           }

      } 
  
}