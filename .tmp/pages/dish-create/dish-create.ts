import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DishData } from '../../providers/dish-data';
import { ProfileData } from '../../providers/profile-data';
import { Dish } from '../../models/dish';
import { Camera } from 'ionic-native';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/*
  Generated class for the DishCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dish-create',
  templateUrl: 'dish-create.html'
})
export class DishCreatePage {

  public dishForm: FormGroup;
  dishPicture: any;
  dateStart: Date;
  timeStart: any;
  timeEnd: any;
  loading: any;
  minDate: string;
  maxDate: string;

  constructor(public nav: NavController, public dishData: DishData, public profileData: ProfileData, public formBuilder: FormBuilder, public loadingCtrl: LoadingController) {
    this.nav = nav;
    this.dishData = dishData;
    this.dishForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      portionsNumber: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      timeStart: ['', Validators.compose([Validators.required])],
      timeEnd: ['', Validators.compose([Validators.required])],
    });
    this.minDate = (new Date()).toISOString();
    this.maxDate = new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 14).toISOString();
  }

  createDish() {
    var dish = new Dish();
    dish.name = this.dishForm.value.name;
    dish.price = this.dishForm.value.price;
    dish.description = this.dishForm.value.description;
    dish.portionsNumber = this.dishForm.value.portionsNumber;
    dish.dateStart = this.dishForm.value.date + "T" + this.dishForm.value.timeStart;
    dish.dateEnd = this.dishForm.value.date + "T" + this.dishForm.value.timeEnd;
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    this.profileData.getUserProfile().on('value', (data) => {
      this.dishData.createDish(dish, this.dishPicture, data.val().address).then(() => {
        this.nav.pop();
      });
    });
  }

  takePicture() {
    Camera.getPicture({
      quality: 95,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }).then(imageData => {
      this.dishPicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  pickPicture() {
    Camera.getPicture({
      quality: 95,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }).then(imageData => {
      this.dishPicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
