import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {
  @Input() vehicles: any;
  @Input() selectedOrder:any;
  constructor() {

  }


  viewOrderDetails(selectedOrder){

    this.selectedOrder.items = selectedOrder.items;
    this.selectedOrder.total = selectedOrder.total;
    this.selectedOrder.discount = selectedOrder.discount;
    this.selectedOrder.totalCharge = selectedOrder.totalCharge;
    this.selectedOrder.timeStamp = selectedOrder.timeStamp;

  }
}
