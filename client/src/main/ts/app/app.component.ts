import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    urlImage:string;

    say(url:string) {
        this.urlImage = url;
    }
}
