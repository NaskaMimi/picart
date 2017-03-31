import { Component} from '@angular/core';
import {Furniture} from "./furniture.component";

@Component({
    selector: 'room',
    templateUrl: './room.component.html',
    directives: [Furniture]
})

export class RoomComponent
{

}