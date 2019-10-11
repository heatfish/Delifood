webpackJsonp([10],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailOrderPage = /** @class */ (function () {
    function DetailOrderPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.id = 1;
        this.pricesum = 0;
        this.shop_id = this.navParams.get('shop_id');
        console.log("รหัสร้าน" + this.shop_id);
        this.getAllDetail();
    }
    DetailOrderPage.prototype.getAllDetail = function () {
        var _this = this;
        this.authService.postData(this.id, "getDetailBillById").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            console.log(_this.data);
            // for (let index = 0; index < this.data.length; index++) {
            //   this.pricesum=Number(this.pricesum)+Number(this.data[index].price);
            // }
            // console.log(this.pricesum) เอาข้อมูลมาบวกแล้วไปใช้
        }, function (err) {
            console.error(err);
        });
    };
    DetailOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail-order',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\detail-order\detail-order.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>detail-order</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-gray">\n\n\n  <ion-grid >\n    <ion-card style="height: 400px;" >\n  \n        <ion-row *ngFor="let d of data" style="margin-bottom:-20px; ">\n          <ion-col col-6 style="padding:20px">\n            <p>{{d.name}}</p>\n          </ion-col>\n          <ion-col col-2></ion-col>\n          <ion-col col-4 style="padding:20px ;">\n            <p style="float: right">{{d.total}} ชิ้น</p>\n          </ion-col>\n        </ion-row>\n   \n\n    </ion-card>\n  </ion-grid>\n\n  <!-- <ion-footer>\n    <ion-navbar color="danger" *ngFor="let d of data">\n      <p style="color:white;text-align: right;margin:7px;">รวม {{d.total}} ชิ้น<br>ราคารวม {{pricesum}} บาท</p>\n\n    </ion-navbar>\n  </ion-footer> -->\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\detail-order\detail-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], DetailOrderPage);
    return DetailOrderPage;
}());

//# sourceMappingURL=detail-order.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, authService, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loginProvider = loginProvider;
        this.id = 1;
        this.getaccound();
    }
    AccountPage.prototype.Logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AccountPage.prototype.gohomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AccountPage.prototype.getaccound = function () {
        var _this = this;
        this.authService.postData(this.id, "getUserById").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            //เอาไปแสดง
            console.log(_this.data);
        }, function (err) {
            console.error(err);
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>account</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n\n  <img src="https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png">\n\n  <h2>{{data.name}}</h2>\n\n  <button ion-button (click)="gohomePage()" color="dark"class="topmar">Home</button><br>\n  <button ion-button (click)="Logout()" color="dark">Log out</button>\n\n \n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__providers_login_login__["a" /* LoginProvider */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddShopPage = /** @class */ (function () {
    function AddShopPage(navCtrl, navParams, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.data = {
            name: "",
            type: "",
            tel: "",
            picture: ""
        };
    }
    AddShopPage.prototype.addshop = function () {
        var _this = this;
        console.log(this.data);
        var alert = this.alertCtrl.create({
            title: 'ยืนยันการเพิ่มเมนู',
            buttons: [
                { text: 'ยกเลิก' },
                {
                    text: 'ตกลง',
                    handler: function (data) {
                        _this.authService.postData(_this.data, 'addShop').then(function (result) {
                            _this.responseData = result;
                            console.log(_this.responseData);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                        }, function (err) {
                            // Error log
                        });
                    }
                }
            ],
        });
        alert.present();
    };
    AddShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-shop',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\add-shop\add-shop.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-gray">\n    \n  <ion-list>\n    <ion-card>\n    <ion-title style="margin-top:10px;">add-shop</ion-title>\n        <ion-item>\n          <ion-label floating>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="data.name"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label floating>Type</ion-label>\n          <ion-input type="text" [(ngModel)]="data.type"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Tel.</ion-label>\n          <ion-input type="tel" [(ngModel)]="data.tel"></ion-input>\n        </ion-item>    \n        \n        <ion-item>\n          <ion-label floating>Picture (<b class="b">Url:</b>)</ion-label>\n          <ion-input type="text" [(ngModel)]="data.picture"></ion-input>\n        </ion-item>  \n        \n    \n        <div padding text-center>\n          <button ion-button block (click)="addshop()">Add Shop</button>\n    \n        </div>\n      </ion-card>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\add-shop\add-shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], AddShopPage);
    return AddShopPage;
}());

//# sourceMappingURL=add-shop.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransportPage = /** @class */ (function () {
    function TransportPage(navCtrl, navParams, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.data = {
            address: "",
            time: "",
            landmark: ""
        };
    }
    TransportPage.prototype.ContinueAddToBill = function (address, time, landmark) {
        console.log(this.data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartPage */], { address: address, time: time, landmark: landmark });
    };
    TransportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-transport',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\transport\transport.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>transport</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-card class="div">\n    <ion-card-title>ข้อมูลติดต่อ</ion-card-title>\n    <ion-item >\n      <ion-label stacked>ที่อยู่จัดส่ง</ion-label>\n      <ion-input type="text" [(ngModel)]="data.address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>เวลาจัดส่ง <a>(etc. 6.00 14.00)</a></ion-label>\n      <!-- <ion-datetime displayFormat="HH:mm"></ion-datetime> -->\n      <ion-input type="text" [(ngModel)]="data.time"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>จุดสังเกต</ion-label>\n      <ion-input type="text" [(ngModel)]="data.landmark"></ion-input>\n    </ion-item>\n  </ion-card>\n\n\n  <button ion-button style="float:right;" (click)="ContinueAddToBill(data.address,data.time,data.landmark)">เสร็จ</button>\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\transport\transport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], TransportPage);
    return TransportPage;
}());

//# sourceMappingURL=transport.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.data = {
            username: "",
            password: "",
            name: "",
            email: "",
            tel: ""
        };
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log(this.data);
        var alert = this.alertCtrl.create({
            title: 'ยืนยันการสมัครสมาชิก',
            buttons: [
                { text: 'ยกเลิก' },
                {
                    text: 'ตกลง',
                    handler: function (data) {
                        _this.authService.postData(_this.data, 'addUser').then(function (result) {
                            _this.responseData = result;
                            console.log(_this.responseData);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]); // ลิ้งหน้าไปที่
                        }, function (err) {
                            // Error log
                        });
                    }
                }
            ],
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="data.username"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="text" [(ngModel)]="data.password"></ion-input>\n    </ion-item>\n   \n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="data.name"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input type="email" [(ngModel)]="data.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Tel.</ion-label>\n      <ion-input type="text" [(ngModel)]="data.tel"></ion-input>\n    </ion-item>\n  \n    <div padding text-center>\n    <button ion-button block (click)="signup()">Sign Up</button>\n    \n </div>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_item_add_item__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = /** @class */ (function () {
    function MenuPage(alertCtrl, navCtrl, authService, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.datas = {
            item_id: "",
            price: "",
            picture: "",
            name: ""
        };
        this.shop_id = this.navParams.get('shop_id');
        console.log("รหัสร้าน" + this.shop_id);
        this.getFood();
    }
    MenuPage.prototype.getFood = function () {
        var _this = this;
        this.authService.postData(this.shop_id, "getFoodById").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            console.log(_this.data);
        }, function (err) {
            console.error(err);
        });
    };
    MenuPage.prototype.addtoCart = function (name, item_id, price, picture) {
        var _this = this;
        this.datas.price = price;
        this.datas.name = name;
        this.datas.item_id = item_id;
        this.datas.picture = picture;
        var alert = this.alertCtrl.create({
            title: 'เพิ่มสินค้าหรือไม่',
            buttons: [
                {
                    text: 'ยกเลิก',
                }, {
                    text: 'เพิ่ม',
                    handler: function (data) {
                        _this.authService.postData(_this.datas, 'addToCart').then(function (result) {
                            _this.responseData = result;
                            console.log(_this.datas);
                            // this.navCtrl.push(LoginPage); // ลิ้งหน้าไปที่
                        }, function (err) {
                            // Error log
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MenuPage.prototype.goCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    MenuPage.prototype.goadditemPage = function (shop_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_item_add_item__["a" /* AddItemPage */], { shop_id: shop_id });
        console.log(this.shop_id);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img\n    src="https://marketplace.canva.com/MAC5oKacMGY/1/0/thumbnail_large-5/canva-black-with-utensils-icon-restaurant-logo-MAC5oKacMGY.jpg"\n    alt="">\n\n\n  <ion-item *ngFor="let d of data" (click)="addtoCart(d.name,d.item_id,d.price,d.picture)">\n    <ion-thumbnail item-start>\n      <img src="{{d.picture}}">\n    </ion-thumbnail>\n    <h2>{{d.name}}</h2>\n    <p>{{d.price}}บาท</p>\n  </ion-item>\n\n\n  <ion-fab right (click)="goadditemPage(shop_id)" >\n    <button ion-fab class="fabcon" display="hidden">\n      <ion-icon name="add"style="font-size:40px "></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab right bottom (click)="goCartPage()">\n    <button ion-fab color="dark">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, authService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.data = {
            name: "",
            price: "",
            picture: "",
            shop_id: ""
        };
        this.shop_id = this.navParams.get('shop_id');
        console.log("รหัสร้าน" + this.shop_id);
        this.data.shop_id = this.shop_id;
    }
    AddItemPage.prototype.Item = function () {
        var _this = this;
        console.log(this.data);
        var alert = this.alertCtrl.create({
            title: 'ยืนยันการเพิ่มเมนู',
            buttons: [
                { text: 'ยกเลิก' },
                {
                    text: 'ตกลง',
                    handler: function (data) {
                        _this.authService.postData(_this.data, 'addItem').then(function (result) {
                            _this.responseData = result;
                            console.log(_this.responseData);
                            // this.goMenuPage();
                            //  this.navCtrl.push(MenuPage);
                        }, function (err) {
                            // Error log
                        });
                    }
                }
            ],
        });
        alert.present();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\add-item\add-item.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>add-item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="data.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Price</ion-label>\n      <ion-input type="text" [(ngModel)]="data.price"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Picture</ion-label>\n      <ion-input type="text" [(ngModel)]="data.picture"></ion-input>\n    </ion-item>\n\n    <div padding text-center>\n      <button ion-button block (click)="Item()">Add Item</button>\n\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_order_detail_order__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderListPage = /** @class */ (function () {
    function OrderListPage(navCtrl, navParams, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.shop_name = [];
        this.id = 1;
        this.datas = {
            item_id: "",
            price: "",
            picture: "",
            name: ""
        };
        this.shop_id = [];
        this.push_shopid = true;
        this.getbill();
        this.getnameshop();
    }
    OrderListPage.prototype.gohomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OrderListPage.prototype.getbill = function () {
        var _this = this;
        this.authService.postData(this.id, "getOrderById").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            for (var index = 0; index < _this.data.length; index++) {
                if (_this.shop_id.length == 0) {
                    _this.shop_id.push(_this.data[index].shop_id);
                }
                else {
                    for (var index2 = 0; index2 < _this.shop_id.length; index2++) {
                        if (_this.shop_id[index2] == _this.data[index].shop_id) {
                            _this.push_shopid = false;
                        }
                    }
                    if (_this.push_shopid == true) {
                        _this.shop_id.push(_this.data[index].shop_id);
                    }
                    _this.push_shopid = true;
                }
            }
            console.log(_this.shop_id);
            console.log("true");
        }, function (err) {
            console.error(err);
        });
    };
    OrderListPage.prototype.getnameshop = function () {
        var _this = this;
        this.authService.postData(this.id, "getAllShop").then(function (result) {
            _this.responseData = result;
            _this.shop = _this.responseData.data;
            for (var index = 0; index < _this.shop_id.length; index++) {
                for (var index2 = 0; index2 < _this.shop.length; index2++) {
                    // console.log(this.shop[index2].name);
                    if (_this.shop_id[index] == _this.shop[index2].shop_id) {
                        _this.shop_name.push(_this.shop[index].name);
                    }
                }
            }
            console.log(_this.shop_name);
            console.log(_this.shop);
        }, function (err) {
            console.error(err);
        });
    };
    OrderListPage.prototype.shopinfo = function (shop_id) {
        console.log(shop_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_order_detail_order__["a" /* DetailOrderPage */], { shop_id: shop_id });
    };
    OrderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-order-list',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\order-list\order-list.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title >\n      order-list\n   </ion-title>\n    <button ion-button clear class="icon" (click)="gohomePage()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-gray">\n  <!-- <ion-item *ngFor="let n of shop_name">\n{{n}}\n  </ion-item> -->\n\n<ion-card *ngFor="let n of shop_name; let i = index;">\n<ion-item>\n\n<ion-thumbnail item-start>\n<img src="">\n</ion-thumbnail>  \n\n<b class="left">ร้าน {{n}}<br><button ion-button  outline (click)="shopinfo(shop_id[i])">รายละเอียด</button></b><br>\n\n\n<a class="right">รวม 0 ชิ้น<br>ราคา บาท</a>\n\n</ion-item>\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\order-list\order-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], OrderListPage);
    return OrderListPage;
}());

//# sourceMappingURL=order-list.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://127.0.0.1/fooddeliAPI/api/";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		288,
		9
	],
	"../pages/add-item/add-item.module": [
		290,
		8
	],
	"../pages/add-shop/add-shop.module": [
		289,
		7
	],
	"../pages/cart/cart.module": [
		291,
		6
	],
	"../pages/detail-order/detail-order.module": [
		292,
		5
	],
	"../pages/login/login.module": [
		293,
		4
	],
	"../pages/menu/menu.module": [
		294,
		3
	],
	"../pages/order-list/order-list.module": [
		295,
		2
	],
	"../pages/signup/signup.module": [
		296,
		1
	],
	"../pages/transport/transport.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
        this.login = {
            user_id: null
        };
        console.log('Hello LoginProvider Provider');
    }
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_detail_order_detail_order__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_add_shop_add_shop__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_transport_transport__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_item_add_item__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_order_list_order_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_login_login__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_transport_transport__["a" /* TransportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_order_list_order_list__["a" /* OrderListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_shop_add_shop__["a" /* AddShopPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_detail_order_detail_order__["a" /* DetailOrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-shop/add-shop.module#AddShopPageModule', name: 'AddShopPage', segment: 'add-shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-item/add-item.module#AddItemPageModule', name: 'AddItemPage', segment: 'add-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-order/detail-order.module#DetailOrderPageModule', name: 'DetailOrderPage', segment: 'detail-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-list/order-list.module#OrderListPageModule', name: 'OrderListPage', segment: 'order-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transport/transport.module#TransportPageModule', name: 'TransportPage', segment: 'transport', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_transport_transport__["a" /* TransportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_order_list_order_list__["a" /* OrderListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_shop_add_shop__["a" /* AddShopPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_detail_order_detail_order__["a" /* DetailOrderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_login_login__["a" /* LoginProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ionic-test\fooddeli\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_shop_add_shop__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_list_order_list__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.getshop();
    }
    HomePage.prototype.goMenuPage = function (shop_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { shop_id: shop_id });
    };
    HomePage.prototype.goLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goorderlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__order_list_order_list__["a" /* OrderListPage */]);
    };
    HomePage.prototype.goCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.goaddshopPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_shop_add_shop__["a" /* AddShopPage */]);
    };
    HomePage.prototype.getshop = function () {
        var _this = this;
        this.authService.postData(this.data, "getAllShop").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            console.log(_this.data);
        }, function (err) {
            console.error(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Food deli\n    </ion-title>\n\n    <button ion-button clear class="icon" (click)="goCartPage()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n\n    <ion-buttons end>\n      <button ion-button (click)="goLoginPage()">\n        <ion-icon name="contact" style="font-size:30px"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n\n    <button ion-button outline block color="danger" (click)="goorderlistPage()">OrderPage</button>\n\n  <ion-item *ngFor="let d of data" (click)="goMenuPage(d.shop_id)">\n    <ion-thumbnail item-start>\n      <img src="{{d.picture}}">\n    </ion-thumbnail>\n    <h2>ร้าน{{d.name}}</h2>\n    รหัสร้าน {{d.shop_id}}\n  </ion-item>\n\n\n\n  <ion-fab right bottom (click)="goaddshopPage()" >\n    <button ion-fab class="fabcon">\n      <ion-icon name="add" style="font-size:40px "></ion-icon>\n    </button>\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport_transport__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.totalfood = [];
        this.sumtotalfood = 0;
        this.sumprice = 0;
        this.id = 1;
        this.aa = {
            address: "dgfdg",
            time: "",
            landmark: "",
            pricesum: "",
            totalsum: "",
            user_id: "",
            shop_id: ""
        };
        this.datas = {
            item_id: "",
            price: "hjkhjk",
            picture: "",
            name: ""
        };
        this.address = this.navParams.get('address');
        this.aa.address = this.navParams.get('address');
        this.time = this.navParams.get('time');
        this.landmark = this.navParams.get('landmark');
        console.log("ข้อมูล" + this.address + " " + this.time + " " + this.landmark);
        this.getcart();
    }
    CartPage.prototype.gotransport = function () {
        // for (let index = 0; index < this.data.length; index++) {
        //        if(this.totalfood==){
        //   console.log("OneMore")
        //        }
        //         else{
        //   console.log("Ok")
        //         }
        // }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__transport_transport__["a" /* TransportPage */]);
    };
    CartPage.prototype.getcart = function () {
        var _this = this;
        this.authService.postData(this.id, "getCartById").then(function (result) {
            _this.responseData = result;
            _this.data = _this.responseData.data;
            for (var index = 0; index < _this.data.length; index++) {
            }
            console.log(_this.data);
        }, function (err) {
            console.error(err);
        });
    };
    CartPage.prototype.showValue = function () {
        var _this = this;
        var inndex = 0;
        this.totalfood.forEach(function (item) {
            _this.sumtotalfood += Number(item);
            _this.sumprice += Number(item) * Number(_this.data[inndex].price);
            inndex++;
        });
    };
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
    CartPage.prototype.addtobilldetail = function (sumprice, sumtotalfood) {
        // for (let index = 0; index < this.data.length; index++) {
        // console.log("ข้อมูล" + this.address + " " + this.time + " " + this.landmark);
        this.aa.address = this.address;
        this.aa.time = this.time;
        this.aa.landmark = this.landmark;
        this.aa.pricesum = String(this.sumprice);
        this.aa.totalsum = String(this.sumtotalfood);
        this.aa.user_id = this.id;
        console.log("billdetail" + this.datas);
        // this.authService.postData(this.billdetail, 'addCartToBill2').then((result) => {
        //   this.responseData = result;
        //   console.log(this.responseData)
        //   console.log("Ok");
        // }, (err) => {
        //   Error
        // });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>cart</ion-title>\n    <button ion-button clear style="float:right;font-size:20px;margin-bottom:-2px;margin-top:-1px;" color="white"\n      (click)="gotransport()">\n      <ion-icon name="pin"></ion-icon>&nbsp;ที่อยู่\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 style="color:rgb(46, 43, 43)" text-center>เลือกจำนวนอาหาร</h3>\n  <ion-grid>\n\n    <ion-item *ngFor="let d of data;let i =index">\n      <ion-row>\n        <ion-col col-3>\n          <img src="{{d.picture}}">\n        </ion-col>\n        <ion-col col-4>\n          <h2>{{d.name}}</h2>\n          <p>{{d.price}} บาท</p>\n        </ion-col>\n\n        <ion-col col-5>\n          <!-- <button ion-button (click)="removenum()" clear>\n            <ion-icon name="remove" style="color: black"></ion-icon>\n          </button>\n          {{totalfood}}\n          <button ion-button (click)="addnum()" clear>\n            <ion-icon name="add" style="color: black"></ion-icon>\n          </button> -->\n          <ion-item>\n            <ion-input type="number" style="float:right;" (ionChange)="showValue()" maxlength="3"\n              [(ngModel)]="totalfood[i]"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-item>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-card style="background-color:rgb(196, 196, 196);">\n    <ion-grid>\n      <ion-row style="font-size:16px;">\n\n        <ion-col offset-4 style="margin-top:5px;margin-right:-15px">\n\n          <p >\n           \n            <a class="blacktext">รวม</a><br>\n\n            <a class="blacktext">ราคา</a>\n\n          </p>\n\n        </ion-col>\n\n        <ion-col text-left style="margin-top:5px;">\n\n          <a class="graytext"> {{sumtotalfood}}</a><br>\n          <a class="graytext">{{sumprice}} </a>\n\n        </ion-col>\n\n        <ion-col  text-left style="margin-right:10px;margin-top:5px;">\n\n          <a class="blacktext">ชิ้น</a><br>\n          <a class="blacktext">บาท</a>\n\n        </ion-col>\n\n        <ion-col col-2 text-right>\n          <button ion-button style="float:right;" (click)="addtobilldetail(sumprice,sumtotalfood)" color="darkgray" >สั่ง</button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-footer>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], CartPage);
    return CartPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.username = null;
        this.password = null;
    }
    LoginPage.prototype.alert = function () {
        var alert = this.alertCtrl.create({
            title: 'แจ้งเตือน',
            message: 'กรุณากรอก Username , password',
            buttons: ['ok']
        });
        alert.present();
    };
    LoginPage.prototype.goSignupPage = function () {
        // this.navCtrl.push(SignupPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
        //   let NonSpaceUser = this.username == null || this.username.trim() === '';
        //   let NonSpacePassword = this.password == null || this.password.trim() === '';
        //   if (NonSpaceUser) {
        //     this.alert();
        //   }
        //   else {
        //     if (NonSpacePassword) {
        //       this.alert();
        //     }
        //     else {
        //       console.log(this.username + " " + this.password);
        //       this.authService.postData(this.data, "getAllUser").then((result) => {
        //         this.responseData = result;
        //         this.data = this.responseData.data;
        //         console.log(this.data);
        //         console.log(this.username);
        //       }, (err) => {
        //         console.error(err);
        //       });
        //       if (this.data == this.username) {
        //         console.log("Ok" + this.username);
        //       }
        //       else {
        //         console.log("false login" + this.username);
        //       }
        //     }
    };
    // }
    LoginPage.prototype.gohomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionic-test\fooddeli\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Log In</ion-title>\n    <button ion-button clear class="icon" (click)="gohomePage()">\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img src="https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg"\n    alt="">\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input type="text" [(ngModel)]="username" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n\n  </ion-item>\n  <div padding text-center>\n    <button ion-button (click)="goSignupPage()" color="dark">Sign Up</button>\n    <button ion-button (click)="login()" color="dark">Log In</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\ionic-test\fooddeli\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map