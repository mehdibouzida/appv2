import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MasterPage } from '../pages/master-page/master-page';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage: any = LoginPage;
  ready: boolean = false;
  loading: any;

  constructor(platform: Platform, public loadingCtrl: LoadingController) {
    //Splashscreen.show();
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    firebase.initializeApp({
      apiKey: "AIzaSyCPcZvzwhxc-Ff1euHthaebA3LUjQzFGqE",
      authDomain: "eate-app.firebaseapp.com",
      databaseURL: "https://eate-app.firebaseio.com",
      storageBucket: "eate-app.appspot.com",
      messagingSenderId: "822804137364"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.rootPage = LoginPage;
      }
      else {
        this.rootPage = MasterPage;
      }
      if (this.ready) {
        this.loading.dismiss();
        //Splashscreen.hide();
      }
      else  {
        this.ready = true;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      if (this.ready) {
        this.loading.dismiss();
        //Splashscreen.hide();
      }
      else  {
        this.ready = true;
      }
    });
  }
}
