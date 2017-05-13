import { Injectable } from '@angular/core';

@Injectable()
export class CarWashService {

  vehicles = [
    {
      licencePlate :'LMV345S',
      type:'truck',
      orders:[{
        items:[{charge: 10, title: "Truck Wash - Licence Plate - LMV345S"},
            {charge: 2, title: "Extra Mud"}],
        stolen: false,
        timeStamp: 1494668458819,
        total: 12,
        totalCharge: 12,
        validForWash: true,
        discount:0
      },
        {
          items:[{charge: 10, title: "Truck Wash - Licence Plate - LMV345S"},
            {charge: 2, title: "Extra Mud"}],
          stolen: false,
          timeStamp: 1492268458819,
          total: 12,
          totalCharge: 6,
          validForWash: true,
          discount:50
        },
        {
          items:[{charge: 10, title: "Truck Wash - Licence Plate - LMV345S"}],
          stolen: false,
          timeStamp: 1482268458819,
          total: 10,
          totalCharge: 10,
          validForWash: true,
          discount:0
        }]
    },
    {
      licencePlate :'CA345S',
      type:'truck',
      orders:[{
        items:[{charge: 10, title: "Truck Wash - Licence Plate - CA345S"},
          {charge: 2, title: "Extra Mud"}],
        stolen: false,
        timeStamp: 1495668458819,
        total: 12,
        totalCharge: 12,
        validForWash: true,
        discount:0
      },
        {
          items:[{charge: 10, title: "Truck Wash - Licence Plate - CA345S"},
            {charge: 2, title: "Extra Mud"}],
          stolen: false,
          timeStamp: 1491268458819,
          total: 12,
          totalCharge: 6,
          validForWash: true,
          discount:50
        },
        {
          items:[{charge: 10, title: "Truck Wash - Licence Plate - CA345S"}],
          stolen: false,
          timeStamp: 1482168458819,
          total: 10,
          totalCharge: 10,
          validForWash: true,
          discount:0
        }]
    },
    {
      licencePlate :'CA88764',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA88764"}],
        stolen: false,
        timeStamp: 149125845122,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      },
        {
          items:[{charge: 5, title: "Car Wash - Licence Plate - CA88764"}],
          stolen: false,
          timeStamp: 14912584987619,
          total: 5,
          totalCharge: 2.5,
          validForWash: true,
          discount:50
        }]
    },
    {
      licencePlate :'CA23984',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA23984"}],
        stolen: false,
        timeStamp: 14956642847819,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA23124',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA23124"}],
        stolen: false,
        timeStamp: 1495668765819,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA98761',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA98761"}],
        stolen: false,
        timeStamp: 1495664498549,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA92342',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA92342"}],
        stolen: false,
        timeStamp: 1495664412349,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA21874',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA21874"}],
        stolen: false,
        timeStamp: 1495664233319,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA2WER64',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA2WER64"}],
        stolen: false,
        timeStamp: 1495661287819,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    },
    {
      licencePlate :'CA21162',
      type:'car',
      orders:[{
        items:[{charge: 5, title: "Car Wash - Licence Plate - CA21162"}],
        stolen: false,
        timeStamp: 1495668764819,
        total: 5,
        totalCharge: 5,
        validForWash: true,
        discount:0
      }
      ]
    }

  ];


  constructor() { }

  createOrder(currentVehicle,order){

    order.timeStamp = (new Date()).getTime();
    let index  = this.vehicles.map(vehicle=>{
        return vehicle.licencePlate;
    }).indexOf(currentVehicle.licencePlate);


    if(index < 0 ){
      this.vehicles.push(Object.assign({}, currentVehicle));
      this.vehicles[this.vehicles.length-1].orders = [];
      this.vehicles[this.vehicles.length-1].orders.push(order);
    }else{
      this.vehicles[index].orders.push(order);
    }
  }


  getOrderHistory(licencePlate):Array<any>{

    let index  = this.vehicles.map(vehicle=>{
      return vehicle.licencePlate;
    }).indexOf(licencePlate);
    if(index < 0){
      return [];
    }else{
      return this.vehicles[index].orders;
    }
  }


  getAllVehicles(){
    return this.vehicles;
  }
}
