import {Component, OnInit, ElementRef, Inject, Output, EventEmitter, Input} from '@angular/core';
import {MainpicComponent} from "../mainpic/mainpic.component";
import {WallpaperListingComponent} from "../objectBar/wallpaperlisting.component";


@Component({
    selector: 'mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['mainmenu.component.css'],
    providers: []
})

export class MainMenu
{

    @Input()
    mainpicref:MainpicComponent;

    @Input()
    barref:WallpaperListingComponent;

    hideDoll()
    {
        this.mainpicref.hideThis();
        this.barref.hideThis();
    }

    showDoll()
    {
        this.mainpicref.showThis();
        this.barref.showThis();
    }
}