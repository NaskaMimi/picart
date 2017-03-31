import { Component, OnInit, ElementRef, Inject} from '@angular/core';

@Component({
    selector: 'furniture',
    templateUrl: './furniture.component.html',
    providers: []
})

export class Furniture
{
    draggableObject:HTMLDivElement = null;

    onMouseDown(event:MouseEvent)
    {
        var element:HTMLDivElement = event.target as HTMLDivElement;
        this.draggableObject = element;
    }

    onMouseUp(event:MouseEvent)
    {
        this.draggableObject = null;
    }

    onMouseMove(event:MouseEvent)
    {
        if(this.draggableObject)
        {
            this.draggableObject.style.top = event.clientY + "px";
            this.draggableObject.style.left = event.clientX + "px";
        }
    }
}