import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-new-wash',
  templateUrl: './new-wash.component.html',
  styleUrls: ['./new-wash.component.css']
})
export class NewWashComponent{
  @Input() currentVehicle: any;

  constructor() {

  }

  setVehicleType(type){
    this.currentVehicle.type=type;

  }

  setHasMud(hasMud){
    this.currentVehicle.hasMud = hasMud;
  }

  setBedDown(bedDown){
    this.currentVehicle.bedDown = bedDown;
  }

}
