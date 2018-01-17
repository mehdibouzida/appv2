import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { Address } from '../models/address';
import firebase from 'firebase';

@Injectable()
export class DishData {
  public dishList: firebase.database.Reference;
  public currentUser: any;
  public dishPictureRef: firebase.storage.Reference;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.dishList = firebase.database().ref('dish');
    this.dishPictureRef = firebase.storage().ref('/dish/');
  }

  createDish(dish: Dish, dishPicture = null, address: Address): any {
    dish.sellerId = this.currentUser;
    dish.address = address;
    dish.orderedPortionsNumber = +0;
    console.log(dish);
    return this.dishList.push(dish).then(newDish => {
      this.dishList.child(newDish.key).child('id').set(newDish.key);
      this.dishList.child(newDish.key).update({ createdAt: firebase.database.ServerValue.TIMESTAMP });
      if (dishPicture != null) {
        this.dishPictureRef.child(newDish.key).child('picture.png')
          .putString(dishPicture, 'base64', { contentType: 'image/png' })
          .then((savedPicture) => {
            this.dishList.child(newDish.key).child('photo')
              .set(savedPicture.downloadURL);
          });
      }
    });
  }

  getDishList(): any {
    console.log(this.dishList);
    return this.dishList;
  }

  getDishDetail(dishId): firebase.database.Reference {
    return this.dishList.child(dishId);
  }

}