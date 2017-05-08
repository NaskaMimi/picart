import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {WallpaperListingComponent} from "../objectBar/wallpaperlisting.component";
import {MainpicComponent} from "../mainpic/mainpic.component";
import {RoomComponent} from "../room/room.component";
import {Furniture} from "../furniture/furniture.component";
import {MainMenu} from "../mainmenu/mainmenu.component";


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
