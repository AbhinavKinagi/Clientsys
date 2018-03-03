import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './app.main';
import { LoginComponent } from './app.login';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterModule } from './app.route';
import { AppSignup } from './app.signup';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AppSignup
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
