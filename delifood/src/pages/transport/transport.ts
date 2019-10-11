import { CartPage } from './../cart/cart';
import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { OrderListPage } from '../order-list/order-list';



@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {


data = {
  address: "",
  time: "",
  landmark: ""
};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService,public alertCtrl:AlertController) {
  }
ContinueAddToBill(address:string,time:string,landmark:string){
  console.log(this.data)

  this.navCtrl.push(CartPage,{address:address,time:time,landmark:landmark});
}
//   addfororder() {
//   console.log(this.data);
//   this.authService.postData(this.data, 'addCartToBill').then((result) => {
//     this.responseData = result;

//     console.log("Add-ok");
// this.navCtrl.push(OrderListPage);
    

//   }, (err) => {
//     // Error log
//   });

// }

}
