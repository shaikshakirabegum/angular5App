import { Component,ElementRef } from '@angular/core';
import { DataService,User } from './data.service';
import { Routes, RouterModule } from '@angular/router';
import {PrivateComponent} from './private/private.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})

export class AppComponent {
  title = 'app is running';
 items = ["mangoes","banana","grapes"];

 public user = new User('','');
 public errorMsg = '';

 constructor(
     private _service:DataService) {}

 login() {
     if(!this._service.login(this.user)){
         this.errorMsg = 'Failed to login';
     }
 }
}

const routes: Routes = [
  { path: '/private', component: PrivateComponent },
  { path: '/app',component: AppComponent }
]
