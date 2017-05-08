import { Component, OnInit, Injectable } from '@angular/core';

import {WallpaperListingComponent} from '../objectBar/wallpaperlisting.component';

@Component({
    selector: 'main-pic',
    templateUrl: './mainpic.component.html',
    styleUrls: ['mainpic.component.css'],
    directives: [ WallpaperListingComponent ]
})

@Injectable()
export class MainpicComponent implements OnInit
{
    urlImage:string;

    ngOnInit():void
    {
        this.urlImage = "./src/main/ts/assets/images/cloth/topik/58.png";
        document.getElementById("dress").style.opacity = "0";
    }

    say(url:string) {
        document.getElementById("my_image").src = url;
    }

    hideThis()
    {
        document.getElementById("mainpic-container").style.left = "7300px";
    }

    showThis()
    {
        document.getElementById("mainpic-container").style.left = "0px";
    }

    setDress(url:string) {
        document.getElementById("dress").src = url;
        document.getElementById("dress").style.opacity = "1";
        document.getElementById("top").style.opacity = "0";
        document.getElementById("bottom").style.opacity = "0";
    }

    setTop(url:string) {
        document.getElementById("top").src = url;
        document.getElementById("dress").style.opacity = "0";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
    }

    setBottom(url:string) {
        document.getElementById("bottom").src = url;
        document.getElementById("dress").style.opacity = "0";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
    }
}
