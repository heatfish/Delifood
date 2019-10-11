import { DetailOrderPage } from './../detail-order/detail-order';
import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  responseData: any;
  data: any;
  shop: any;
  shop_name = []

  id: any = 1;
  datas = {
    item_id: "",
    price: "",
    picture: "",
    name: ""


  };
  shop_id = [];
  push_shopid: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {

    this.getbill();
    this.getnameshop();
  }



  gohomePage() {
    this.navCtrl.setRoot(HomePage);
  }
  getbill() {

    this.authService.postData(this.id, "getOrderById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      for (let index = 0; index < this.data.length; index++) {
        if (this.shop_id.length == 0) {
          this.shop_id.push(this.data[index].shop_id);
        } else {
          for (let index2 = 0; index2 < this.shop_id.length; index2++) {
            if (this.shop_id[index2] == this.data[index].shop_id) {
              this.push_shopid = false;
            }
          }
          if (this.push_shopid == true) {
            this.shop_id.push(this.data[index].shop_id);
          }
          this.push_shopid = true;
        }
      }
      console.log(this.shop_id);
      console.log("true");
    }, (err) => {
      console.error(err);
    });

  }

  getnameshop() {
    this.authService.postData(this.id, "getAllShop").then((result) => {
      this.responseData = result;
      this.shop = this.responseData.data;
      for (let index = 0; index < this.shop_id.length; index++) {
        for (let index2 = 0; index2 < this.shop.length; index2++) {
          // console.log(this.shop[index2].name);
          if (this.shop_id[index] == this.shop[index2].shop_id) {
            this.shop_name.push(this.shop[index].name);

          }
        }


      }
      console.log(this.shop_name);
    
      console.log(this.shop);
    }, (err) => {
      console.error(err);
    });
  }

  shopinfo(shop_id: string) {
    console.log(shop_id);
    this.navCtrl.push(DetailOrderPage, { shop_id: shop_id });
  }
}


