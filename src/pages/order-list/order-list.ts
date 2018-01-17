import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderActiveListPage } from '../order-active-list/order-active-list';
import { OrderHistoryListPage } from '../order-history-list/order-history-list';

/*
  Generated class for the OrderList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html'
})
export class OrderListPage {

  tabActive = OrderActiveListPage;
  tabHistory = OrderHistoryListPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OrderListPage Page');
  }

}
