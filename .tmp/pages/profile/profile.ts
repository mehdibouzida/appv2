import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home'
import { User } from '../../models/user';
import { Address } from '../../models/address';
import { Camera } from 'ionic-native';
import { GeolocationData } from '../../providers/geolocation-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: User;
  public birthDate: Date;
  //public phoneNumber: string;
  profilePicture: any;
  public isProfileRequired: boolean;

  constructor(public nav: NavController, public profileData: ProfileData, public authData: AuthData, public geolocationData: GeolocationData, public alertCtrl: AlertController) {
    this.nav = nav;
    this.profileData = profileData;
    this.isProfileRequired = null;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = new User(data.val());
      this.birthDate = this.userProfile.birthDate;
      //this.phoneNumber = this.userProfile.phoneNumber;
      console.log(this.authData.fireAuth.currentUser.providerData[0].providerId);
      if (this.isProfileRequired == null) this.isProfileRequired = this.userProfile.isProfileComplete();
      /*if (this.isProfileRequired && !this.isProfileComplete()) {
        if(this.authData.fireAuth.currentUser.providerData[0].providerId == "facebook.com") {
          this.profileData.getUserInfoFromFacebook();
        }
        else if (this.authData.fireAuth.currentUser.providerData[0].providerId == "google.com") {
          this.profileData.getUserInfoFromGoogle();
        }
      }*/
    });

  }

  logOut() {
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

  updateName() {
    let alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            if (data != null && data.firstName != "" && data.lastName != "") {
              this.profileData.updateName(data.firstName, data.lastName);
            }
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate) {
    this.profileData.updateDOB(birthDate);
  }

  updatePhoneNumber() {
    console.log("updating phone number");
    let alert = this.alertCtrl.create({
      inputs: [
        {
          type: 'tel',
          name: 'newPhoneNumber',
          placeholder: 'Your phone number',
          value: this.userProfile.phoneNumber
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            if (data != null && data.newPhoneNumber != "") {
              this.profileData.updatePhoneNumber(data.newPhoneNumber);
            }
          }
        }
      ]
    });
    alert.present();
  }

  updateEmail() {
    if (this.authData.fireAuth.currentUser.providerData[0].providerId == "password") {
      let alert = this.alertCtrl.create({
        inputs: [
          {
            name: 'newEmail',
            placeholder: 'Your new email',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Save',
            handler: data => {
              this.profileData.updateEmail(data.newEmail);
            }
          }
        ]
      });
      alert.present();
    }
  }

  updateAddress() {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'address',
          placeholder: 'Adresse',
          value: (this.userProfile.address != null) ? this.userProfile.address.address : null
        },
        {
          name: 'city',
          placeholder: 'Ville',
          value: (this.userProfile.address != null) ? this.userProfile.address.city : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            if (data != null && data.address != null && data.city != null) {
              this.geolocationData.geocode(this.geolocationData.getRequestFromString(data.address + data.city)).then((result) => {
                let alert2 = this.alertCtrl.create();
                alert2.setTitle('Confirmez votre adresse');

                for (var index in result) {
                  alert2.addInput({
                    type: 'radio',
                    label: result[index].toString,
                    value: index
                  });
                }

                alert2.addButton('Cancel');
                alert2.addButton({
                  text: 'OK',
                  handler: data2 => {
                    if (data2 != null) {
                      this.profileData.updateAddress(result[data2]);
                    }
                  }
                });
                alert2.present();
              });
            }
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword() {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updatePassword(data.newPassword);
          }
        }
      ]
    });
    alert.present();
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
      this.profileData.updatePhoto(imageData);
      this.profilePicture = imageData;
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
      this.profileData.updatePhoto(imageData);
      this.profilePicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  goToHome() {
    this.nav.setRoot(HomePage);
  }
}