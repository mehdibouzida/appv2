import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DishData } from '../../providers/dish-data';
import { ProfileData } from '../../providers/profile-data';
import { Dish } from '../../models/dish';
import { User } from '../../models/user';
import { Order } from '../../models/order';
import { DishOrderPayPage } from '../dish-order-pay/dish-order-pay'

/*
  Generated class for the DishDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dish-detail',
  templateUrl: 'dish-detail.html'
})
export class DishDetailPage {
  public currentDish: Dish;
  public seller: User;
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public nav: NavController, public navParams: NavParams, public dishData: DishData, public profileData: ProfileData, private alertController: AlertController) {
    this.navParams = navParams;
    this.dishData.getDishDetail(this.navParams.get('dishId'))
      .on('value', (snapshot) => {
        this.currentDish = new Dish(snapshot.val());
        console.log(this.currentDish);
        this.profileData.getUserProfile(this.currentDish.sellerId)
          .on('value', (snapshot2) => {
            console.log(snapshot2.val());
            this.seller = new User(snapshot2.val());
            console.log(this.seller);
          });
      });
  }

  order() {
    let alert = this.alertController.create();
    alert.setTitle('Quantité');

    for (var i = 1; i <= this.currentDish.portionsLeftNumber; i++) {
      alert.addInput({
        type: 'radio',
        label: i.toString(),
        value: i.toString()
      });
    }


    alert.addButton('Annuler');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        var order = new Order();
        order.dishId = this.currentDish.id;
        order.quantity = data;
        order.totalPrice = data * this.currentDish.price;

        this.nav.push(DishOrderPayPage, {
          order: order,
          dish: this.currentDish,
          seller: this.seller
        });
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

}
