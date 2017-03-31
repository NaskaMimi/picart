import { Component, OnInit, Input, Inject, Injectable } from '@angular/core';
import { WallpaperListing } from './wallpaperlisting.model';
import {Wallpaper} from "./wallpaper.model";
import {MainpicComponent} from "./mainpic.component";

@Component({
    selector: 'wallpaper-listing',
    templateUrl: './wallpaperlisting.component.html',
    styleUrls: ['./wallpaperlisting.component.css'],
    providers: [ MainpicComponent ] })

@Injectable()
export class WallpaperListingComponent implements OnInit
{
    private wallpaperListing:WallpaperListing;
    type:string = "top";

    constructor(@Inject(MainpicComponent) private appComponent: MainpicComponent)
    { }

    ngOnInit()
    {
        this.wallpaperListing = this.loadWallpapers();

    }

    setType(type:string)
    {
       this.type = type;

        if (this.type == "dress")
        {
            this.wallpaperListing = this.loadDresses();
        }
        else if (this.type == "top")
        {
            this.wallpaperListing = this.loadWallpapers();
        }
        else if (this.type == "bottom")
        {
            this.wallpaperListing = this.loadBottom();
        }
    }

    open(url:string)
    {
        if (this.type == "dress")
        {
            this.appComponent.setDress(url);
        }
        else if (this.type == "top")
        {
            this.appComponent.setTop(url);
        }
        else if (this.type == "bottom")
        {
            this.appComponent.setBottom(url);
        }
    }

    loadWallpapers()
    {
        let listing = new WallpaperListing();
        let wallpapers = new Array<Wallpaper>();

        let item = new Wallpaper();
        item.url = "./client/src/main/ts/assets/images/cloth/topik/58.png";
        item.title = "Flut1";
        wallpapers.push(item);

        let item2 = new Wallpaper();
        item2.url = "./client/src/main/ts/assets/images/cloth/topik/59.png";
        item2.title = "Flut2";
        wallpapers.push(item2);

        let item3 = new Wallpaper();
        item3.url = "./client/src/main/ts/assets/images/cloth/topik/60.png";
        item3.title = "Flut1";
        wallpapers.push(item3);

        let item4 = new Wallpaper();
        item4.url = "./client/src/main/ts/assets/images/cloth/topik/61.png";
        item4.title = "Flut2";
        wallpapers.push(item4);

        let item5 = new Wallpaper();
        item5.url = "./client/src/main/ts/assets/images/cloth/topik/62.png";
        item5.title = "Flut1";
        wallpapers.push(item5);

        let item6 = new Wallpaper();
        item6.url = "./client/src/main/ts/assets/images/cloth/topik/63.png";
        item6.title = "Flut2";
        wallpapers.push(item6);

        listing.wallpapers = wallpapers;
        listing.after = "";
        return listing;
    }

loadBottom()
{
    let listing = new WallpaperListing();
    let wallpapers = new Array<Wallpaper>();

    let item = new Wallpaper();
    item.url = "./client/src/main/ts/assets/images/cloth/niz/42.png";
    item.title = "Flut1";
    wallpapers.push(item);

    let item2 = new Wallpaper();
    item2.url = "./client/src/main/ts/assets/images/cloth/niz/43.png";
    item2.title = "Flut2";
    wallpapers.push(item2);

    let item3 = new Wallpaper();
    item3.url = "./client/src/main/ts/assets/images/cloth/niz/44.png";
    item3.title = "Flut2";
    wallpapers.push(item3);

    let item4 = new Wallpaper();
    item4.url = "./client/src/main/ts/assets/images/cloth/niz/45.png";
    item4.title = "Flut2";
    wallpapers.push(item4);

    let item5 = new Wallpaper();
    item5.url = "./client/src/main/ts/assets/images/cloth/niz/46.png";
    item5.title = "Flut2";
    wallpapers.push(item5);

    listing.wallpapers = wallpapers;
    listing.after = "";
    return listing;
}

    loadDresses()
    {
        let listing = new WallpaperListing();
        let wallpapers = new Array<Wallpaper>();

        let item = new Wallpaper();
        item.url = "./client/src/main/ts/assets/images/cloth/dresses/2.png";
        item.title = "Flut1";
        wallpapers.push(item);

        let item2 = new Wallpaper();
        item2.url = "./client/src/main/ts/assets/images/cloth/dresses/3.png";
        item2.title = "Flut2";
        wallpapers.push(item2);

        let item3 = new Wallpaper();
        item3.url = "./client/src/main/ts/assets/images/cloth/dresses/4.png";
        item3.title = "Flut2";
        wallpapers.push(item3);

        let item4 = new Wallpaper();
        item4.url = "./client/src/main/ts/assets/images/cloth/dresses/5.png";
        item4.title = "Flut2";
        wallpapers.push(item4);

        let item5 = new Wallpaper();
        item5.url = "./client/src/main/ts/assets/images/cloth/dresses/6.png";
        item5.title = "Flut2";
        wallpapers.push(item5);

        listing.wallpapers = wallpapers;
        listing.after = "";
        return listing;
    }
}