import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

user_id:string;
loginStatus:boolean=false;
  public login={
    user_id:null
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

}
