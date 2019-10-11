import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-order',
  templateUrl: 'detail-order.html',
})
export class DetailOrderPage {
  shop_id:any;
  id:any=1;
  responseData: any;
  data: any;
  pricesum:number=0;


  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService) {
    this.shop_id = this.navParams.get('shop_id');
    console.log("รหัสร้าน" + this.shop_id);
    this.getAllDetail();

  }

getAllDetail(){
  this.authService.postData(this.id, "getDetailBillById").then((result) => {
    this.responseData = result;
    this.data = this.responseData.data;
    console.log(this.data);
    // for (let index = 0; index < this.data.length; index++) {
    //   this.pricesum=Number(this.pricesum)+Number(this.data[index].price);
      
    // }
    // console.log(this.pricesum) เอาข้อมูลมาบวกแล้วไปใช้
  }, (err) => {
    console.error(err);
  });
}
}
