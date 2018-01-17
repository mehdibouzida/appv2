import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Dish } from '../../models/dish';
import { User } from '../../models/user';
import { Order } from '../../models/order';
import { OrderData } from '../../providers/order-data';
import { DishListPage } from '../dish-list/dish-list'
/*
  Generated class for the DishOrderPay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dish-order-pay',
  templateUrl: 'dish-order-pay.html'
})
export class DishOrderPayPage {

  order: Order;
  dish: Dish;
  seller: User;
  loading: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, public orderData: OrderData, public loadingCtrl: LoadingController) {//, public toastCtrl: ToastController) {
    this.order = new Order(navParams.get('order'));
    this.dish = new Dish(navParams.get('dish'));
    this.seller = new User(navParams.get('seller'));
  }

  confirmOrder() {
    console.log('confirmOrder');
    console.log(this.order);
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    this.orderData.createOrder(this.order)
    .then(result => {
      this.navCtrl.setRoot(DishListPage);
    })
    .catch(reason => {
      console.log(reason);
      /*var toast = this.toastCtrl.create({
        message: 'Oups, il ne reste pas assez de portions de ce plat',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present().then(result => {this.navCtrl.setRoot(DishesPage);});*/
    });
  }

}
