import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {WallpaperListingComponent} from "./wallpaperlisting.component";
import {MainpicComponent} from "./mainpic.component";
import {RoomComponent} from "./room.component";
import {Furniture} from "./furniture.component";
import {MainMenu} from "./mainmenu.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, WallpaperListingComponent, MainpicComponent, RoomComponent, Furniture, MainMenu
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
