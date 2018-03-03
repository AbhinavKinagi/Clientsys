import { Component } from '@angular/core';
import { appRouterModule } from "./app.route";
import { Router } from '@angular/router';
import { MainComponent } from './app.main';
import { AppSignup } from './app.signup';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
    selector: 'app-root',
    template: `
    <body>
    	  <div class="modal-dialog">
				<div class="loginmodal-container">
					<h1>Login to Your Account</h1><br>
				  <form>
					<input type="text" name="user" placeholder="Username" [(ngModel)]="username">
					<input type="password" name="pass" placeholder="Password" [(ngModel)]="password">
                    <input type="submit" name="login" class="login loginmodal-submit" value="Login" (click)="login()">
                    <div style.color="orange">
                    <label id="message" class="label-color" [(ngModel)]="message">{{message}}</label>
                    </div>
                  </form>
                  
				  <div class="login-help">
				  </div>
				</div>
            </div>
        </body>
        
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8RnD0kldYC7RPKxLAyfhi84KuY_K1nHg",
    authDomain: "transils-9aa20.firebaseapp.com",
    databaseURL: "https://transils-9aa20.firebaseio.com",
    projectId: "transils-9aa20",
    storageBucket: "",
    messagingSenderId: "492345684204"
  };
  firebase.initializeApp(config);
</script>
  `,
    styleUrls: ['./app.login.css']
})
export class LoginComponent {
    x: any = [{ user: "baba", pass: "baba" }, { user: "abhi", pass: "abhi" }];
    username: string;
    password: string;
    message: string;

    login() {
        var i = 0;
        for (i = 0; i < this.x.length; i++) {

            // alert(this.username);
            if (this.username == this.x[i].user && this.password == this.x[i].pass) {
                this.message = "OK";
            }
            else if (i+1==this.x.length) {
                this.message = "Invalid username or password!";
            }

        }
    }
}