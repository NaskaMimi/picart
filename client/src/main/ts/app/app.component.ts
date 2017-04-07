import { Component, OnInit, Injectable } from '@angular/core';
import {WallpaperListingComponent} from './wallpaperlisting.component';
import {MainpicComponent} from "./mainpic.component";
import {RoomComponent} from "./room.component";
import {MainMenu} from "./mainmenu.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WallpaperListingComponent, MainpicComponent, RoomComponent, MainMenu ]
})

@Injectable()
export class AppComponent implements OnInit
{
    ngOnInit():void {}
}
