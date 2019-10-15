import { AddItemPage } from './../add-item/add-item';
import { AuthService } from './../../providers/auth-service/auth-service';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  responseData: any;
  data: any;
  shop_id: any;
  datas = {
    item_id: "",
    price: "",
    picture: "",
    name:""
  };
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public authService: AuthService, public navParams: NavParams) {
    this.shop_id = this.navParams.get('shop_id');
    console.log("รหัสร้าน" + this.shop_id);
    this.getFood();

  }


  getFood() {
    this.authService.postData(this.shop_id, "getFoodById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }

  addtoCart(name:string,item_id:string,price:string,picture:string) {

    this.datas.price=price;
    this.datas.name=name;
    this.datas.item_id=item_id;
    this.datas.picture=picture;

    const alert = this.alertCtrl.create({
      title: 'เพิ่มสินค้าหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',

        }, {
          text: 'เพิ่ม',
          handler: data => {
            if(this.authService.login_status!=false){
              this.authService.postData(this.datas, 'addToCart').then((result) => {
                this.responseData = result;
                console.log(this.datas);
              }, (err) => {
                // Error log
              });
            }else{
              const alert = this.alertCtrl.create({
                title: 'Please login',
                subTitle: 'please login before add order',
                buttons: ['OK']
              });
              alert.present();
              this.navCtrl.setRoot(LoginPage);
            }
           

          }
        }
      ]
    });
    alert.present();
  }


  goCartPage() {
    this.navCtrl.push(CartPage);
  }

  goadditemPage(shop_id:string){
    this.navCtrl.push(AddItemPage,{shop_id:shop_id});
    console.log(this.shop_id);
    
     
  }

}


