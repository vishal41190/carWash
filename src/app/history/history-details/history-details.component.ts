import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent{
  @Input() selectedOrder:any;
  constructor() { }

}
