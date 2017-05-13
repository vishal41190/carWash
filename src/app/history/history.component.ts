import { Component, OnInit } from '@angular/core';
import {CarWashService} from "../car-wash.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  vehicles:any;
  selectedOrder:any;


  constructor(private carWashService:CarWashService) {
    this.vehicles = [];
    this.selectedOrder = {items:[]};
  }

  ngOnInit() {

    this.vehicles = this.carWashService.getAllVehicles();

  }

}
