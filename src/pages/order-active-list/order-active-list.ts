import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../models/dish';
import { Order } from '../../models/order';
import { OrderData } from '../../providers/order-data';
import { DishData } from '../../providers/dish-data';
import { DishDetailPage } from '../dish-detail/dish-detail';

/*
  Generated class for the OrderActiveList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-active-list',
  templateUrl: 'order-active-list.html'
})
export class OrderActiveListPage {

  public activeOrders: Array<Order>;

  constructor(public navCtrl: NavController, public orderData: OrderData, public dishData: DishData) {
    this.getOrders();
  }

  getOrders() {
    /*var params = {
      user_id : this.ordersData.userProfile.id,
      active : true
    };*/
    this.orderData.getUserOrders().on('value', snapshot => {
      let rawList = new Array<Order>();
      snapshot.forEach(snap => {
        var o = new Order(snap.val());
        this.dishData.getDishDetail(o.dishId).on('value', snapshot2 => {
          o.dish = new Dish(snapshot2.val());
          console.log(o);
          rawList.push(o);
        });
      });
      this.activeOrders = rawList;
    });
    //.then(result => {
    /*console.log(result);
    this.activeOrders = result;*/
    //})
    //.catch(reason => {console.log(reason)});
  }

  goToDishDetail(dishId) {
    this.navCtrl.push(DishDetailPage, {
      dishId: dishId,
    });
  }

}
