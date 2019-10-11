import { HomePage } from './../home/home';
import { MenuPage } from './../menu/menu';
import { AuthService } from './../../providers/auth-service/auth-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  shop_id: any;
  responseData: any;
  data = {
    name: "",
    price: "",
    picture: "",
    shop_id: ""
  };

  constructor(public navCtrl: NavController, public authService: AuthService, public alertCtrl: AlertController, public navParams: NavParams) {
    this.shop_id = this.navParams.get('shop_id');
    console.log("รหัสร้าน" + this.shop_id);
    this.data.shop_id = this.shop_id;
  }

  Item() {
    console.log(this.data);
    const alert = this.alertCtrl.create({
      title: 'ยืนยันการเพิ่มเมนู',
      buttons: [
        { text: 'ยกเลิก' },
        {
          text: 'ตกลง',
          handler: data => {
            this.authService.postData(this.data, 'addItem').then((result) => {
              this.responseData = result;

              console.log(this.responseData);
              // this.goMenuPage();
            //  this.navCtrl.push(MenuPage);
          
            }, (err) => {
              // Error log
            });

          }
        }
      ],
    });
    alert.present();
  }
  // goMenuPage() {
  //   // this.navCtrl.push(MenuPage, { id: id });
    

  // }

}
