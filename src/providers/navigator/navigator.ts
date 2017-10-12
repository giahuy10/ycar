import { Injectable } from '@angular/core';
//import { NavController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NavigatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NavigatorProvider {

  constructor(public http: Http) {
    console.log('Hello NavigatorProvider Provider');
  }

}
