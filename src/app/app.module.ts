import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PptxComponent} from './pptx/pptx.component';

import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PptxComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
