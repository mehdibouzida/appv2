import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventData {
  public currentUser: any;
  public eventList: any;
  public profilePictureRef: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');
    this.profilePictureRef = firebase.storage().ref('/guestProfile/');
  }

  createEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number): any {
    return this.eventList.push({
      name: eventName,
      date: eventDate,
      price: +eventPrice,
      cost: +eventCost,
      revenue: eventCost * -1
    }).then(newEvent => {
      this.eventList.child(newEvent.key).child('id').set(newEvent.key);
    });
  }

  addGuest(guestName, eventId, eventPrice, guestPicture = null): any {

    return this.eventList.child(eventId).child('guestList').push({
      guestName: guestName
    }).then((newGuest) => {
      this.eventList.child(eventId).child('revenue').transaction((revenue) => {
        revenue += +eventPrice;
        return revenue;
      });
      if (guestPicture != null) {
        this.profilePictureRef.child(newGuest.key).child('profilePicture.png')
          .putString(guestPicture, 'base64', { contentType: 'image/png' })
          .then((savedPicture) => {
            this.eventList.child(eventId).child('guestList').child(newGuest.key).child('profilePicture')
              .set(savedPicture.downloadURL);
          });
      }
    });
  }

  getEventList(): any {
    return this.eventList;
  }

  getEventDetail(eventId): any {
    return this.eventList.child(eventId);
  }

}