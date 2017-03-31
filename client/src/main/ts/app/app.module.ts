import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WallpaperListingComponent} from "./wallpaperlisting.component";
import {MainpicComponent} from "./mainpic.component";
import {RoomComponent} from "./room.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, WallpaperListingComponent, MainpicComponent, RoomComponent
  ],
  bootstrap: [ AppComponent, WallpaperListingComponent, MainpicComponent, RoomComponent ]
})
export class AppModule { }
