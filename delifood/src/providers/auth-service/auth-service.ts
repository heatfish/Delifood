import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://127.0.0.1/api/";

@Injectable()
export class AuthService {
  login_status:boolean=false;
  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}