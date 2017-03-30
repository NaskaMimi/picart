import { Component, OnInit, Injectable } from '@angular/core';

import '../assets/css/styles.css';
import {WallpaperListingComponent} from './wallpaperlisting.component';

@Component({
    selector: 'main-pic',
    templateUrl: './mainpic.component.html',
    directives: [ WallpaperListingComponent ]
})

@Injectable()
export class MainpicComponent implements OnInit
{
    urlImage:string;

    ngOnInit():void
    {
        this.urlImage = "./client/src/main/ts/assets/images/Fluttershy.png";
    }

    say(url:string) {
        document.getElementById("my_image").src = url;
    }

    setDress(url:string) {
        document.getElementById("dress").src = url;
    }
}
