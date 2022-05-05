import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewTube';
  darkmode=false;
  modetoogle()
  {
    this.darkmode=!this.darkmode;
    document.documentElement.setAttribute('data-theme',this.darkmode ? "dark":"light"); 
  }
}
