import {Component} from '@angular/core';

import {NavController, App, AlertController,NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import {Common} from "../../providers/common";
//import {Page} from '@ionic-angular';
import {DetailPage} from '../detail/detail';
import {TransactionPage} from '../transaction/transaction';
@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  public userDetails : any;
  public resposeData : any;
  public dataSet : any;
  userPostData = {
    "user_id": "",
    "token": ""
   
  };

  constructor(public common: Common, private alertCtrl: AlertController,public navCtrl : NavController, public app : App, public authService : AuthService, public navParams: NavParams) {
	  //console.log(localStorage.getItem('userData'));
	  //console.log('Hello ok ok AuthService Provider');
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;

	this.authService.postData(this.userPostData, "new").then((result) =>{
			this.resposeData = result;
			console.log(this.resposeData);
			if(this.resposeData.userData){
			 localStorage.setItem('userData', JSON.stringify(this.resposeData));
			
		  }

		}, (err) => {
      //Connection failed message
    });

  }

	seedetail2(id) {
		this.navCtrl.push(DetailPage, {id: id});
	}
	viewhistory() {
		this.navCtrl.push(TransactionPage);
	}
	


  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  backToWelcome() {
    const root = this
      .app
      .getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 100);

  }

}
