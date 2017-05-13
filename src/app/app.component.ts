import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

rootPage:any = 'home';


  showHistory(){
    this.rootPage = 'history';
  }

  showHome(){
    this.rootPage = 'home';
  }
}
