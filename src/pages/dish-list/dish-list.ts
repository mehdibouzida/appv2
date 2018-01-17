import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DishData } from '../../providers/dish-data'
import {  DishCreatePage } from '../dish-create/dish-create'
import { DishDetailPage } from '../dish-detail/dish-detail'
import { Dish } from '../../models/dish'
/*
  Generated class for the DishList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dish-list',
  templateUrl: 'dish-list.html'
})
export class DishListPage {
  public addressDisplayText: any = "ici";
  public dishList: Dish[];

  constructor(public nav: NavController, public dishData: DishData) {
    this.nav = nav;
    this.dishData = dishData;

    this.dishList = new Array<Dish>();

    this.dishData.getDishList().on('value', snapshot => {
      let rawList = new Array<Dish>();
      snapshot.forEach(snap => {

        var d = new Dish(snap.val());
        rawList.push(d);
      });
      this.dishList = rawList;
    });
  }

  goToDishCreate() {
    this.nav.push(DishCreatePage);
  }

  goToDishDetail(dishId) {
    this.nav.push(DishDetailPage, {
      dishId: dishId,
    });
  }

}
