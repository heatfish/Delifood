import { LoginPage } from './../login/login';
import { AccountPage } from './../account/account';
import { AuthService } from './../../providers/auth-service/auth-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img, AlertController } from 'ionic-angular';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  data = {
    username: "",
    password: "",
    name: "",
    email: "",
    tel: ""
  };

  constructor(public navCtrl: NavController, public authService: AuthService, public alertCtrl: AlertController) {
  }

  signup() {
    console.log(this.data);
    const alert = this.alertCtrl.create({
      title: 'ยืนยันการสมัครสมาชิก',
      buttons: [
        { text: 'ยกเลิก' },
        {
          text: 'ตกลง',
          handler: data => {
            this.authService.postData(this.data, 'addUser').then((result) => {
              this.responseData = result;

              console.log(this.responseData);

              this.navCtrl.push(LoginPage); // ลิ้งหน้าไปที่

            }, (err) => {
              // Error log
            });

          }
        }
      ],
    });
    alert.present();
  }
  

}
