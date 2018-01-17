import { Injectable } from '@angular/core';
import { Order } from '../models/order'
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the OrderData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderData {

  public orderList: firebase.database.Reference;
  public dishList: firebase.database.Reference;
  public currentUser: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.orderList = firebase.database().ref('order');
    this.dishList = firebase.database().ref('dish');
  }

  createOrder(order: Order): any {
    order.userId = this.currentUser;
    console.log(order);
    return this.orderList.push(order).then(newOrder => {
      console.log(newOrder);      
      this.orderList.child(newOrder.key).child('id').set(newOrder.key);
      this.orderList.child(newOrder.key).update({ createdAt: firebase.database.ServerValue.TIMESTAMP });
      this.dishList.child(order.dishId).child('orderedPortionsNumber').transaction((orderedPortionsNumber) => {
        orderedPortionsNumber += +order.quantity;
        return orderedPortionsNumber;
      });
    });
  }

  getUserOrders(): any {
    return this.orderList.orderByChild("userId").equalTo(this.currentUser);
  }

  getOrderDetail(orderId): firebase.database.Reference {
    return this.orderList.child(orderId);
  }

}
