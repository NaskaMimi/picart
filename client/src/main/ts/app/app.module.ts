import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Ng2DragDropModule} from "ng2-drag-drop";
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
    providers:    [ Ng2DragDropModule ],
  declarations: [
    AppComponent, WallpaperListingComponent, MainpicComponent, RoomComponent, Furniture, MainMenu
  ],
  bootstrap: [ AppComponent, WallpaperListingComponent, MainpicComponent, RoomComponent, Furniture, MainMenu ]
})
export class AppModule { }
