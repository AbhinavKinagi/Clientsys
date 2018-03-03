import { Component } from '@angular/core';
import { appRouterModule } from "./app.route";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-root',
  template: `
  <div>
  <h3>Application form</h3>
  <form #form="ngForm" (ngSubmit)="submitForm(form.value)">

      <div class="form-group">
          <label>First Name:</label>
          <!-- Since we are working with template driven form-->
          <input id="name" required minlength="4" type="text" class="form-control" [(ngModel)]="firstname" placeholder="Name"  name="firstname" #name="ngModel" ngModel require>
          <div *ngIf="name.invalid && (name.dirty || name.touched)"
          class="alert alert-danger">

          <div *ngIf="name.errors.required">
          First Name is required.
          </div>
          <div *ngIf="name.errors.minlength">
            First Name must be at least 4 characters long.
          </div>
      </div>

      <div class="form-group">
          <label>Last Name:</label>
          <!-- Since we are working with template driven form-->
          <input type="text" id="last" required minlength="4" class="form-control" [(ngModel)]="lastname" placeholder="Name" name="lastname" #last="ngModel" ngModel require>
          <div *ngIf="last.invalid && (last.dirty || last.touched)"
          class="alert alert-danger">

          <div *ngIf="last.errors.required">
          Last Name is required.
          </div>
          <div *ngIf="last.errors.minlength">
            Last Name must be at least 4 characters long.
          </div>
      </div>

      <div class="form-group">
          <label>Gender</label>
      </div>
      <div class="radio">
      <label>
          <input type="radio" name="gender" value="Male" ngModel>
          Male
      </label>
      </div>

      <div class="radio">
      <label>
          <input type="radio" name="gender" value="Female" ngModel>
          Female
      </label>
      </div>
      <button (click)="clicked(firstname,lastname)">Submit</button><br>
      Saved Value:{{name1}} {{name2}}
      
  `,
  styleUrls: ['./app.component.css']
})

export class AppSignup{
title='Welcome for the registration';
firstName:string;
name1:string;
lastName:string;
name2:string;

clicked(firstName,lastName){
 this.name1=firstName;
 this.name2=lastName;
}
}