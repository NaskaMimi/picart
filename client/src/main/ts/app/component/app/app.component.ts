import { Component, OnInit, Injectable } from '@angular/core';
import {WallpaperListingComponent} from '../objectBar/wallpaperlisting.component';
import {MainpicComponent} from "../mainpic/mainpic.component";
import {RoomComponent} from "../room/room.component";
import {MainMenu} from "../mainmenu/mainmenu.component";

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
