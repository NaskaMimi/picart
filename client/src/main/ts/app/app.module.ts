import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WallpaperListingComponent} from "./wallpaperlisting.component";
import {MainpicComponent} from "./mainpic.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, WallpaperListingComponent, MainpicComponent
  ],
  bootstrap: [ AppComponent, WallpaperListingComponent, MainpicComponent ]
})
export class AppModule { }
