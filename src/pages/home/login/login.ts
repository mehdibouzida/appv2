import {
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { SignupPage } from '../signup/signup';
import { MasterPage } from '../master-page/master-page';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { Facebook } from 'ionic-native';
import { GooglePlus } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    /**
    * Creates a ControlGroup that declares the fields available, their values and the validators that they are going
    * to be using.
    *
    * I set the password's min length to 6 characters because that's Firebase's default, feel free to change that.
    */
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  /**
  * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
  */
  elementChanged(input) {
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  /**
  * If the form is valid it will call the AuthData service to log the user in displaying a loading component while
  * the user waits.
  *
  * If the form is invalid it will just log the form value, feel free to handle that as you like.
  */
  loginUser() {

    this.submitAttempt = true;

    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
        this.nav.setRoot(MasterPage);
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  facebookLogin() {
    this.submitAttempt = true;
    Facebook.login(['email']).then((response) => {
      this.authData.signInFacebook(response).then(authData => {
        this.nav.setRoot(MasterPage);
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

    }).catch((error) => { console.log(error) });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  googleLogin() {
    this.submitAttempt = true;
    GooglePlus.login({
      'scopes': 'profile email',
      'webClientId': '822804137364-08mk1fjchr120o2nkt916bvtmt5a7pvm.apps.googleusercontent.com' // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
    }).then((response) => {
      this.authData.signInGoogle(response).then(authData => {
        this.nav.setRoot(MasterPage);
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

    }).catch((error) => { console.log(error) });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToResetPassword() {
    this.nav.push(ResetPasswordPage);
  }

}
