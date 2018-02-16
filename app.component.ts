import { Component } from '@angular/core';
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
				  </form>
					
				  <div class="login-help">
				  </div>
				</div>
            </div>
        </body>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    x:any=[{user:"baba",pass:"baba"},{user:"abhi",pass:"abhi"}];
    username:string;
    password:string;

    login()
    {
        var i=0;
        for(i=0;i<this.x.length;i++)
        {
           
           // alert(this.username);
            if(this.username==this.x[i].user && this.password==this.x[i].pass)
            {
                alert("Logged in");
            }
            else if(i+1==this.x.length)
            {      
                alert("Wrong Username or Password");
            }
        }
    }
}
