import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';

import firebase from 'firebase';

@Injectable()
export class AuthData {
  // Here we declare the variables we'll be using.
  public fireAuth: firebase.auth.Auth;
  public userProfile: firebase.database.Reference;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfile.child(newUser.uid).set({ email: email });
      });
  }

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): any {
    return this.fireAuth.signOut();
  }

  signInFacebook(response: any): any {
      let facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);
    return this.fireAuth.signInWithCredential(facebookCredential)
      .then((data) => {
        let newUser = data;
        console.log("Firebase success: " + JSON.stringify(newUser));
        this.userProfile.child(newUser.uid).once('value').then((snapshot) => {
          if (snapshot.val() == null) {
            console.log("Creating new profile for Facebook user.");
            return Facebook.api("/me?fields=id,email,first_name,last_name,picture.type(large)", ["public_profile"]).then((result) => {
              console.log("Result: ", result);
              this.userProfile.child(newUser.uid).set({
                email: result.email,
                firstName: result.first_name,
                lastName: result.last_name,
                avatar: result.picture.data.url
              });
            }).catch((error) => {
              console.error("Failed: ", error);
            })
          }
        });
      });
  }

  signInGoogle(response: any): any {
      let googleCredential = firebase.auth.GoogleAuthProvider
        .credential(response.idToken);
    return this.fireAuth.signInWithCredential(googleCredential)
      .then((data) => {
        let newUser = data;
        console.log("Firebase success: " + JSON.stringify(newUser));
        this.userProfile.child(newUser.uid).once('value').then((snapshot) => {
          if (snapshot.val() == null) {
            console.log("Creating new profile for Google user.");
            console.log("User retrieved from Google :");
            console.log(response);
            console.log("_______________________________________________________sxdwfdwf___________________");
            this.userProfile.child(newUser.uid).set({
              email: newUser.email,
              firstName: response.givenName,
              lastName: response.familyName,
              avatar: response.imageUrl
            }).then((success) => {
              console.log("success creating profile : " + success);
            }).catch((error) => {
              console.log("error creating profile : " + error);
            });/*.then(() => {
              console.log("User retrieved from Google :");
              console.log(newUser);
              return this.userProfile.child(newUser.uid).update({
                firstName: newUser.givenName,
                lastName: newUser.familyName,
                avatar: newUser.imageUrl
              });
            })*/;
          }
        });
      });
  }


}
