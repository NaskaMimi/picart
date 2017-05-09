import { Component, OnInit, Injectable } from '@angular/core';

import {WallpaperListingComponent} from '../objectBar/wallpaperlisting.component';

@Component({
    selector: 'mainpic',
    templateUrl: './mainpic.component.html',
    styleUrls: ['mainpic.component.css']
})

export class MainpicComponent implements OnInit
{
    urlImage:string;

    ngOnInit():void
    {
        this.urlImage = "./src/main/ts/assets/images/cloth/topik/58.png";
        document.getElementById("dress").style.opacity = "0";
    }

    say(url:string) {
        (document.getElementById("my_image") as HTMLImageElement).src = url;
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
        (document.getElementById("dress") as HTMLImageElement).src = url;
        document.getElementById("dress").style.opacity = "1";
        document.getElementById("top").style.opacity = "0";
        document.getElementById("bottom").style.opacity = "0";
    }

    setTop(url:string) {
        (document.getElementById("top") as HTMLImageElement).src = url;
        document.getElementById("dress").style.opacity = "0";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
    }

    setBottom(url:string) {
        (document.getElementById("bottom") as HTMLImageElement).src = url;
        document.getElementById("dress").style.opacity = "0";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
    }
}
