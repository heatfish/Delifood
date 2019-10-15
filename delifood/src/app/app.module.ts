import { DetailOrderPage } from './../pages/detail-order/detail-order';
import { AddShopPage } from './../pages/add-shop/add-shop';
import { TransportPage } from './../pages/transport/transport';
import { AddItemPage } from './../pages/add-item/add-item';
import { AccountPage } from './../pages/account/account';
import { CartPageModule } from './../pages/cart/cart.module';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/auth-service/auth-service';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { CartPage } from '../pages/cart/cart';
import { AlertController } from 'ionic-angular';
import { OrderListPage } from '../pages/order-list/order-list';
import { LoginProvider } from '../providers/login/login';
import { GooglePlus } from '@ionic-native/google-plus';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    CartPage,
    AccountPage,
    AddItemPage,
    TransportPage,
    OrderListPage,
    AddShopPage,
    DetailOrderPage
   
  
  ],
  imports: [
    BrowserModule,HttpModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    CartPage,
    AccountPage,
    AddItemPage,
    TransportPage,
    OrderListPage,
    AddShopPage,
    DetailOrderPage
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    [GooglePlus]
    
   
  ]
})
export class AppModule {}
