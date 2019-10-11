import { LoginProvider } from './../../providers/login/login';
import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  responseData:any;
  data:any;
  id:any=1;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService,public loginProvider:LoginProvider) {
    this.getaccound();
  }

  Logout(){
    this.navCtrl.setRoot(LoginPage);
  }
  gohomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  getaccound(){
    this.authService.postData(this.id, "getUserById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
 //เอาไปแสดง

      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }

}
