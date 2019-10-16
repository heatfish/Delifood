import { AuthService } from './../../providers/auth-service/auth-service';
import { TransportPage } from './../transport/transport';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  totalfood = [];
  sumtotalfood: number = 0;
  sumprice: number = 0;
  responseData: any;

  id: any = 1;

  address: any;
  time: null;
  landmark: null;

  data: any;

  bb = {
    asd: "",
    sdf: ""
  }

  aa = {
    address: "dgfdg",
    time: "",
    landmark: "",
    pricesum: "",
    totalsum: "",
    user_id: "",
    shop_id: ""
  };

  datas = {
    item_id: "",
    price: "hjkhjk",
    picture: "",
    name: ""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
    this.address = this.navParams.get('address');
    this.time = this.navParams.get('time');
    this.landmark = this.navParams.get('landmark');
    console.log("ข้อมูล" + this.address + " " + this.time + " " + this.landmark);

    this.getcart();


  }

  getcart() {
    this.authService.postData(this.id, "getCartById").then((result) => {
      this.responseData = result;
      this.data = this.responseData.data;
      for (let index = 0; index < this.data.length; index++) {


      }
      console.log(this.data);
    }, (err) => {
      console.error(err);
    });
  }

  showValue() {
    let inndex = 0;

    this.sumprice = 0;
    this.sumtotalfood = 0;
    this.totalfood.forEach(item => {
      this.sumtotalfood += Number(item);
      this.sumprice += Number(item) * Number(this.data[inndex].price)
      inndex++
    });

  }
  tabtoclear(i: string) {
    this.totalfood[i] = "";
  }




  addtobilldetail(sumprice: string, sumtotalfood: string) {



    // for (let index = 0; index < this.data.length; index++) {
    // console.log("ข้อมูล" + this.address + " " + this.time + " " + this.landmark);

    this.aa.address = this.address;
    this.aa.time = this.time;
    this.aa.landmark = this.landmark;
    this.aa.pricesum = String(this.sumprice);
    this.aa.totalsum = String(this.sumtotalfood);
    this.aa.user_id = this.id

    console.log(" billdetail " + this.aa.address + " " + this.aa.totalsum +" " + this.aa.pricesum + this.aa);


    // this.authService.postData(this.billdetail, 'addCartToBill2').then((result) => {
    //   this.responseData = result;
    //   console.log(this.responseData)
    //   console.log("Ok");
    // }, (err) => {
    //   Error
    // });
  }

  gotransport() {
    this.navCtrl.push(TransportPage);
    // for (let index = 0; index < this.data.length; index++) {
    //        if(this.totalfood==){
    //   console.log("OneMore")
    //        }
    //         else{
    //   console.log("Ok")
    //         }
    // }

  }

  // inserttotal(i: string, price: string) {

  //   this.totalfood[i] = "";
  //   //  console.log(i); 
  //   this.sumtotalfood = 0;
  //   this.sumprice = 0;
  //   for (let index = 0; index < this.data.length; index++) {
  //     //  this.totalfood[index]=0;
  //     this.sumtotalfood = Number(this.sumtotalfood) + Number(this.totalfood[index]);
  //     this.sumprice = Number(this.sumprice) + (Number(this.totalfood[index]) * Number(this.data[index].price));
  //   }

  //   console.log(this.sumtotalfood);
  //   console.log(this.sumprice);

  // }

  // addCartTobilldetail2() {
  // this.authService.postData(this.billdetail, 'addCartTobilldetail').then((result) => {
  //     this.responseData = result;

  // }




  // addnum() {
  //   this.totalfood++;
  // }
  // removenum() {
  //   this.totalfood--;
  // }

}
