import { ProfileData } from '../../providers/profile-data';
import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DishListPage } from '../dish-list/dish-list';
import { OrderListPage } from '../order-list/order-list';
import { User } from '../../models/user';

/*
  Generated class for the MasterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({/*
  selector: 'page-master-page',*/
  templateUrl: 'master-page.html'
})
export class MasterPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{ title: string, component: any, icon?: string, badge?: number }>;
  public userProfile: User;

  constructor(public profileData: ProfileData) {
    this.pages = [
      { title: 'Plats', component: DishListPage, icon: "restaurant" },
      { title: 'Commandes', component: OrderListPage, icon : "basket" }/*,
      { title: 'Messages', component: MessagesPage, icon : "mail", badge: 2 }*/
    ];
    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = new User(data.val());
      if (!this.userProfile.isProfileComplete()) {
        this.rootPage = ProfilePage;
        console.log("profile page loading");
      }
      else {
        this.rootPage = DishListPage;
        console.log("home page loading");
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToUserProfile() {
    this.nav.push(ProfilePage);
  }

}
