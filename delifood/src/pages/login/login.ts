import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { AccountPage } from './../account/account';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData: any;
  data: any;


  username: any = null;
  password: any = null;



  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {


  }
  alert() {
    let alert = this.alertCtrl.create({

      title: 'แจ้งเตือน',
      message: 'กรุณากรอก Username , password',
      buttons: ['ok']

    });
    alert.present();

  }
  goSignupPage() {
    // this.navCtrl.push(SignupPage);
    this.navCtrl.push(SignupPage);
  }
  login() {
    this.navCtrl.setRoot(AccountPage);
  //   let NonSpaceUser = this.username == null || this.username.trim() === '';
  //   let NonSpacePassword = this.password == null || this.password.trim() === '';



  //   if (NonSpaceUser) {
  //     this.alert();
  //   }

  //   else {
  //     if (NonSpacePassword) {
  //       this.alert();

  //     }
  //     else {
  //       console.log(this.username + " " + this.password);


  //       this.authService.postData(this.data, "getAllUser").then((result) => {
  //         this.responseData = result;
  //         this.data = this.responseData.data;

  //         console.log(this.data);
  //         console.log(this.username);

  //       }, (err) => {
  //         console.error(err);
  //       });
  //       if (this.data == this.username) {
  //         console.log("Ok" + this.username);

  //       }
  //       else {
  //         console.log("false login" + this.username);

  //       }

  //     }

    }



  // }
  gohomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}






