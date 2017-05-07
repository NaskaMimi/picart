import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import {MainpicComponent} from "./mainpic.component";
import {WallpaperListingComponent} from "./wallpaperlisting.component";

@Component({
    selector: 'mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['mainmenu.component.css'],
    providers: []
})

export class MainMenu
{
    constructor(@Inject(MainpicComponent) private mainpic: MainpicComponent, @Inject(WallpaperListingComponent) private itemsList: WallpaperListingComponent)
    {

    }

    hideDoll()
    {
        this.mainpic.hideThis();
        this.itemsList.hideThis();
    }

    showDoll()
    {
        this.mainpic.showThis();
        this.itemsList.showThis();
    }
}