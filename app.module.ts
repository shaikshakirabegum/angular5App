import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule ,MatToolbarModule} from '@angular/material';
 
//import {MdButtonModule, MdCheckboxModule,MdGridListModule,MdInputModule,MdIconModule} from '@angular/material
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import { DataService } from './data.service';
 
import { AppComponent } from './app.component';
import { PrivateComponent } from './private/private.component';
 

@NgModule({
	declarations: [
    	AppComponent,
    	PrivateComponent
  	],
  	imports: [
    	BrowserModule,
		MatCardModule, MatButtonModule, MatIconModule,MatToolbarModule,
    	BrowserAnimationsModule
	  ],
	  exports: [MatButtonModule, MatToolbarModule],
  	providers: [MatIconRegistry,DataService],
  	bootstrap: [AppComponent]
})
export class AppModule { }