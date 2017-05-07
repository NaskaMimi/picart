import { Component, AfterViewInit, ElementRef, Inject, Input} from '@angular/core';

@Component({
    selector: 'furniture',
    templateUrl: './furniture.component.html',
    styleUrls: ['furniture.component.css']
})
export class Furniture implements AfterViewInit
{
    gravityObject:[];
    gravityInterval:any;

    @Input()
    urlImage:string;
    @Input()
    index:string;
    @Input()
    top:string;
    @Input()
    left:string;
    @Input()
    width:string;
    @Input()
    height:string;

    ngAfterViewInit():void
    {
        this.gravityObject = [];

        var element = document.getElementById(this.index);
        if(element)
        {
            element.ondragstart = function() { return false; };
            
            var style = document.getElementById(this.index).style;
            style.position = "absolute";
            style.top = this.top;
            style.left = this.left;
            style.width = this.width;
            style.height = this.height;
            style.backgroundRepeat = "no-repeat";
        }

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
            var posx = event.clientX-this.convertStringToNumber(this.draggableObject.style.width)/2;
            var posy = event.clientY-this.convertStringToNumber(this.draggableObject.style.height)/2;

            this.draggableObject.style.top = posy + "px";
            this.draggableObject.style.left = posx + "px";
        }
    }

    timer(gravityObject:HTMLDivElement):void
    {
        var top = this.convertStringToNumber(gravityObject.style.top);
        var height = this.convertStringToNumber(gravityObject.style.height);
        if(top<500-parseInt(height))
       {

           gravityObject.style.top = this.calculate(this.convertStringToNumber(gravityObject.style.top), 20)+"px";
       }
        else clearInterval(this.gravityInterval);
    }

    convertStringToNumber(top:string)
    {
        return top.substring(0, top.indexOf("p"));
    }

    calculate(x1, x2):Number
    {
        return parseInt(x1)+parseInt(x2);
    }
}