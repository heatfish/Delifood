import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-shop',
  templateUrl: 'add-shop.html',
})
export class AddShopPage {
  responseData: any;
  data = {
    name: "",
    type: "",
    tel:"",
    picture: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService,public alertCtrl:AlertController) {
  }


  addshop(){    console.log(this.data);
    const alert = this.alertCtrl.create({
      title: 'ยืนยันการเพิ่มเมนู',
      buttons: [
        { text: 'ยกเลิก' },
        {
          text: 'ตกลง',
          handler: data => {
            this.authService.postData(this.data, 'addShop').then((result) => {
              this.responseData = result;

              console.log(this.responseData);
              this.navCtrl.setRoot(HomePage)
              

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
