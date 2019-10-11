import { AddShopPage } from './../add-shop/add-shop';
import { AuthService } from './../../providers/auth-service/auth-service';
import { AddItemPage } from './../add-item/add-item';
import { CartPage } from './../cart/cart';
import { LoginPage } from './../login/login';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { NavController, Menu } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';
import { OrderListPage } from '../order-list/order-list';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  responseData: any;
  data: any;
  
  
  constructor(public navCtrl: NavController,public authService: AuthService) {
this.getshop();
  }
  goMenuPage(shop_id:string){
   
     this.navCtrl.push(MenuPage,{shop_id:shop_id});
  }

  goLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  goorderlistPage(){
this.navCtrl.push(OrderListPage);
  }
 
  goCartPage(){
    this.navCtrl.push(CartPage);
  }
  goaddshopPage(){
    this.navCtrl.push(AddShopPage);
  }
   
  getshop() {
    this.authService.postData(this.data, "getAllShop").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
     
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }
}
