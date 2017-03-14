import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.components';
import {AboutComponent} from'./components/about.components';
import {HomeComponent} from'./components/home.components';
import {SubmitComponent} from'./components/submit.components';
import { HeroFormComponent } from './components/hero-form.component';

const appRoutes: Routes=[
    {
        path:'',
    component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'query',
        component: UserComponent
    },
    {
        path:'submit',
        component: HeroFormComponent
    }
    
    
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
