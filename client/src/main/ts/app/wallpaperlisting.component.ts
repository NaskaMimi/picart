import { Component, OnInit, Input, Inject } from '@angular/core';
import { WallpaperListing } from './wallpaperlisting.model';
import {Wallpaper} from "./wallpaper.model";
import {MainpicComponent} from "./mainpic.component";

@Component({
    selector: 'wallpaper-listing',
    templateUrl: './wallpaperlisting.component.html',
    styleUrls: ['./wallpaperlisting.component.css'],
    providers: [ MainpicComponent ] })

export class WallpaperListingComponent implements OnInit
{
    private wallpaperListing:WallpaperListing;
    type:string;

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
        else
        {
            this.wallpaperListing = this.loadWallpapers();
        }
    }

    open(url:string)
    {
        if (this.type == "dress")
        {
            this.appComponent.setDress(url);
        }
        else
        {
            this.appComponent.say(url);
        }
    }

    loadWallpapers()
    {
        let listing = new WallpaperListing();
        let wallpapers = new Array<Wallpaper>();

        let item = new Wallpaper();
        item.url = "./client/src/main/ts/assets/images/Fluttershy.png";
        item.title = "Flut1";
        wallpapers.push(item);

        let item2 = new Wallpaper();
        item2.url = "./client/src/main/ts/assets/images/second.png";
        item2.title = "Flut2";
        wallpapers.push(item2);

        let item3 = new Wallpaper();
        item3.url = "./client/src/main/ts/assets/images/Fluttershy.png";
        item3.title = "Flut1";
        wallpapers.push(item3);

        let item4 = new Wallpaper();
        item4.url = "./client/src/main/ts/assets/images/second.png";
        item4.title = "Flut2";
        wallpapers.push(item4);

        let item5 = new Wallpaper();
        item5.url = "./client/src/main/ts/assets/images/Fluttershy.png";
        item5.title = "Flut1";
        wallpapers.push(item5);

        let item6 = new Wallpaper();
        item6.url = "./client/src/main/ts/assets/images/second.png";
        item6.title = "Flut2";
        wallpapers.push(item6);

        listing.wallpapers = wallpapers;
        listing.after = "";
        return listing;
    }

    loadDresses()
    {
        let listing = new WallpaperListing();
        let wallpapers = new Array<Wallpaper>();

        let item = new Wallpaper();
        item.url = "./client/src/main/ts/assets/images/Fluttershy.png";
        item.title = "Flut1";
        wallpapers.push(item);

        let item2 = new Wallpaper();
        item2.url = "./client/src/main/ts/assets/images/second.png";
        item2.title = "Flut2";
        wallpapers.push(item2);

        listing.wallpapers = wallpapers;
        listing.after = "";
        return listing;
    }
}