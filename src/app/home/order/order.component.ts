import {Component, Input, DoCheck} from '@angular/core';
import {CarWashService} from "../../car-wash.service";
import swal from 'sweetalert2'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements DoCheck {
  @Input() currentVehicle: any;
  order:any = {};
  constructor(private carWashService:CarWashService) {
  }

  ngDoCheck(){

    //Checking if user updates Vehicle Configuration
    //Calculating Order details according to user Selection
    this.calculateOrder();

  }

  calculateOrder(){
    this.order = {items:[],total:0,discount:0,totalCharge:0,validForWash:true};
    let charge = 0;

    if(this.currentVehicle.licencePlate != '1111111'){  //Flag Stolen vehicle

      if(this.currentVehicle.licencePlate.length > 0 ){ //Don't calculate the order without Licence Plate - Discount is determined based on Licence plate

        this.order.stolen = false;

        if(this.currentVehicle.type == 'car'){  //If vehicle is car bedDown and mud options are not applicable.

          this.currentVehicle.bedDown = false;
          this.currentVehicle.hasMud = false;
          this.order.items.push({title:'Car Wash - Licence Plate - '+ this.currentVehicle.licencePlate,charge:5});
          charge = charge+5;

        }else if(this.currentVehicle.type == 'truck'){ //If vehicle is Truck check for mud and bed down options

          this.order.items.push({title:'Truck Wash - Licence Plate - '+ this.currentVehicle.licencePlate,charge:10});
          charge = charge+10;

          if(this.currentVehicle.hasMud){

            this.order.items.push({title:'Extra Mud',charge:2});
            charge = charge+2;

          }

          if(this.currentVehicle.bedDown){ // Bed down truck in not accepted for Car wash

            this.order.validForWash = false;

          }

        }else{

          this.order.validForWash = false;

        }

        this.order.total = charge;
        let orders = this.carWashService.getOrderHistory(this.currentVehicle.licencePlate); //Checking for discount on a second visit

        if(orders.length == 1){ //Second visit
          this.order.discount  = 50; //In percentage
          this.order.totalCharge = this.order.total - this.order.total*this.order.discount*0.01;
        }else{
          this.order.discount = 0;
          this.order.totalCharge = this.order.total;
        }

      }else{
        this.order.validForWash = false;
      }

    }else{
      this.order.stolen = true;
      this.order.validForWash = false;
    }

  }

  createOrder(){

    this.carWashService.createOrder(this.currentVehicle,this.order);
    swal(
      'Vehicle wash complete!',
      'Thank you for your business',
      'success'
    )
    this.currentVehicle.licencePlate= '';
    this.currentVehicle.type ='car';
    this.order = {};
  }
}
