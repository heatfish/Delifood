import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { AccountPage } from './../account/account';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';
// import { GooglePlus } from '@ionic-native/google-plus';
import { LoginProvider } from '../../providers/login/login';

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

  check = {
    username: "d",
    password: "d"
  }



  constructor( public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {


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
    this.authService.postData(this.check, 'check_login').then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
      
      if (this.data.length !=0) {
        this.navCtrl.push(HomePage);
        this.authService.login_status=true;
      console.log(this.authService.login_status);
      }else {
        const alert = this.alertCtrl.create({
          title: 'Login Fail',
          subTitle: 'Please check your username or password',
          buttons: ['OK']
        });
        alert.present();
      }
    }, (err) => {
    });

  }
  gohomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}






