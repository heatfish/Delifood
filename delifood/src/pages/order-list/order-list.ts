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
  shop_all=[];
  shop_name = [];
  datax= [];
  
  food_on_workink=[];

  lem: any;
  work:"working";

  id: string = "1";
  datas = {
    item_id: "",
    price: "",
    picture: "",
    name: ""

    
  };
  shop_id = [];
  push_shopid: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService, public alertCtrl: AlertController) {
    this.getFoodStatus();
  }

  getFoodStatus() {
    console.log(this.id);
    this.authService.postData(this.id, "getAllBillById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      console.log(this.data);
      for (let i= 0; i < this.data.length; i++) {
        if(this.data[i].status=="working"){
          this.food_on_workink.push(this.data[i].shop_id);
        }
      }
      console.log(this.data);
      this.getshopdata(); 
    }, (err) => {
      console.error(err);
    });
    
    // console.log(this.food_on_workink);
    
    
  }
  
  getshopdata() {
    for (let j = 0; j < this.food_on_workink.length; j++) {
      this.authService.postData(this.food_on_workink[j], "getShopById ").then((result) => {
        this.responseData = result;
        this.shop=this.responseData.data;
        // console.log(this.shop);
        this.shop_all.push(this.shop);
      }, (err) => {
        console.error(err);
      });
      
    }
    console.log(this.shop_all);
  }
  gohomePage() {
    this.navCtrl.setRoot(HomePage);
  }
  shopinfo(shop_id: string) {
    console.log(shop_id);
    this.navCtrl.push(DetailOrderPage, { shop_id: shop_id });
  }
  goDetailOrder(shop_id:string){
    this.navCtrl.push(DetailOrderPage,{shop_id:shop_id});
    // console.log(shop_id);
    
  }
}


