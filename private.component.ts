import { Component, OnInit } from '@angular/core';
import { DataService,User } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [DataService]
})
export class PrivateComponent implements OnInit {
  constructor(
    private _service:DataService){}

ngOnInit(){
    this._service.checkCredentials();
}

logout() {
    this._service.logout();

}
}
