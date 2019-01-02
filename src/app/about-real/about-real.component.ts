import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-about-real',
  templateUrl: './about-real.component.html',
  styleUrls: ['./about-real.component.css']
})
export class AboutRealComponent implements OnInit {

  constructor(private sup: AppComponent) { }

  ngOnInit() {
    this.sup.aboutClick();
  }

}
