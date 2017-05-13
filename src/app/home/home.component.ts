import {Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentVehicle:any;

  constructor() {

    //Setting up Default Vehicle configuration
    this.currentVehicle = {
      licencePlate :'',
      type:'car',
      hasMud:false,
      bedDown:false
    };

  }

}
