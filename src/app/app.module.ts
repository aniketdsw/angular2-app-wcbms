import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';
import { AboutComponent }  from './components/about.components';
import { HomeComponent }  from './components/home.components';
import { SubmitComponent }  from './components/submit.components';
import {routing} from './app.routing';
import { HeroFormComponent } from './components/hero-form.component';


@NgModule({
  imports:      [ BrowserModule , HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, UserComponent, AboutComponent, HomeComponent, SubmitComponent, HeroFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
