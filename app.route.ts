import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { LoginComponent } from './app.login';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
import { MainComponent } from './app.main';
import { AppSignup } from './app.signup';


export const routes:Routes = [
	{ path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent},
    { path: 'signup', component: AppSignup}
];



export const appRouterModule = RouterModule.forRoot(routes);