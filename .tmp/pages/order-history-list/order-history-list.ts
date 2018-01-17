import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OrderHistoryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-history-list',
  templateUrl: 'order-history-list.html'
})
export class OrderHistoryListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OrderHistoryListPage Page');
  }

}
