import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor (private router: Router) {}
  current = 'home';
  homeClick() {
    this.current = 'home';
    this.router.navigate(['']);
  }
  public aboutClick() {
    this.current = 'about';
    this.router.navigate(['about']);
  }
  public projectsClick() {
    this.current = 'projects';
    this.router.navigate(['projects']);
  }
  public contactClick() {
    this.current = 'contact';
  }
  public skillsClick() {
    this.current = 'skills';
    this.router.navigate(['skills']);
  }
}
