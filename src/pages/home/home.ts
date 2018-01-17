import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';
import { DishCreatePage } from '../dish-create/dish-create';
import { DishListPage } from '../dish-list/dish-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, public authData: AuthData) {

  }

  goToCreate() {
    this.nav.push(EventCreatePage);
  }

  goToList() {
    this.nav.push(EventListPage);
  }

  goToCreateDish() {
    this.nav.push(DishCreatePage);
  }

  goToListDish() {
    this.nav.setRoot(DishListPage);
  }

}
