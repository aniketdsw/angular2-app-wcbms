import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../components/hero';
import { Comments }    from '../components/comment';
import {Login} from '../components/login';


@Injectable()
export class PostsService {
        private postsUrl = 'http://localhost:80/bugzilla/rest.cgi/bug';
        private postsCommentUrl = 'http://localhost:80/bugzilla/rest.cgi/bug';

        private urlHome="http://localhost/bugzilla/buglist.cgi?email1=aniketdsw%40gmail.com&ctype=atom";

    constructor(private http: Http){
            console.log('PostsService Initialized....');
    }

getPosts(value:string){

        return this.http.get(value)
        .map(res => res.json());

}
getPosts1(value:string){

        return this.http.get(value)
        .map(res => res.text());

}


addHome(value:string){
console.log(value);
        return this.http.get(value);
        

}

addPosts(hero:Hero) {                
        let body = JSON.stringify( hero );
        console.log(body);            
        let headers = new Headers({ 'Content-Type': 'application/jsonp' });
        let options = new RequestOptions({ headers: headers });

    

         console.log('checkpoint');
      //  console.log(parse("Bug.Create", hero));
        return this.http.post(this.postsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

addPostsComment(comment:Comments,myurl:string) {                
        let body = JSON.stringify( comment );
        console.log(body);            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

    

         console.log('checkpoint');
      //  console.log(parse("Bug.Create", hero));
        return this.http.post(myurl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

getHome(login:Login,urlHome:string) {        
        var body = `username=${'aniketdsw@gmail.com'}&password=${'bugs@123'}`;        
     //   let body = JSON.stringify( login );
        console.log(body);            
    //    let headers = new Headers({ 'Content-Type': 'application/json',"authorization": "Basic YW5pa2V0ZHN3QGdtYWlsLmNvbTpidWdzQDEyMw==",
    //"cache-control": "no-cache",
    //"postman-token": "4f764c35-df56-8bdf-0d42-1d827c51ad6f"});


        
//        let options = new RequestOptions({ headers: headers });

          console.log('checkpoint');
      //  console.log(parse("Bug.Create", hero));
  //      return this.http.post(this.urlHome, body, options)
    //        .map(this.extractData)
      //      .catch(this.handleError);
  

var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return this.http
    .post('http://localhost:80/bugzilla/buglist.cgi?email1=aniketdsw%40gmail.com', body, { headers: headers })
    ;
     

 }

private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}