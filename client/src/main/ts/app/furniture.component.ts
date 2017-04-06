import { Component, OnInit, ElementRef, Inject} from '@angular/core';

@Component({
    selector: 'furniture',
    templateUrl: './furniture.component.html',
    providers: []
})

export class Furniture implements OnInit
{
    gravityObject:Array;
    gravityInterval;
    ngOnInit():void
    {
        this.gravityObject = [];
    }
    draggableObject:HTMLDivElement = null;

    onMouseDown(event:MouseEvent)
    {
        var element:HTMLDivElement = event.target as HTMLDivElement;
        this.draggableObject = element;
        this.gravityObject[0] = element;

    }

    onMouseUp(event:MouseEvent)
    {
        this.draggableObject = null;
        var _this = this;
        this.gravityInterval = setInterval(function()
        {
            _this.timer(_this.gravityObject[0]);
        }, 50);
    }

    onMouseMove(event:MouseEvent)
    {
        if(this.draggableObject)
        {
            this.draggableObject.style.top = event.clientY + "px";
            this.draggableObject.style.left = event.clientX + "px";
        }
    }

    timer(gravityObject:HTMLDivElement):void
    {
        var top = this.convertTopToNumber(gravityObject.style.top);
        if(top<500)
       {

           gravityObject.style.top = this.calculate(this.convertTopToNumber(gravityObject.style.top), 20)+"px";
       }
        else clearInterval(this.gravityInterval);
    }

    convertTopToNumber(top:string)
    {
        return top.substring(0, top.indexOf("p"));
    }

    calculate(x1, x2):Number
    {
        return parseInt(x1)+parseInt(x2);
    }
}