import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import {MainpicComponent} from "./mainpic.component";
import {WallpaperListingComponent} from "./wallpaperlisting.component";

@Component({
    selector: 'mainmenu',
    templateUrl: './mainmenu.component.html',
    providers: []
})

export class MainMenu
{
    constructor(@Inject(MainpicComponent) private mainpic: MainpicComponent, @Inject(WallpaperListingComponent) private list: WallpaperListingComponent)
    {

    }

    hideDoll()
    {
        this.mainpic.hideThis();
    }

    showDoll()
    {
        this.mainpic.showThis();
    }
}