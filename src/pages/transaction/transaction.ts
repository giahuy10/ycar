import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import {DetailPage} from '../detail/detail';
/**
 * Generated class for the TransactionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
detailPage = DetailPage;
	public userDetails : any;
public resposeData : any;

userPostData = {
    "user_id": "",
    "token": ""
	
   
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
	  const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.userPostData.token = this.userDetails.token;
		this.authService.postData(this.userPostData, "history").then((result) =>{
			this.resposeData = result;
			console.log(this.resposeData);
			

			}, (err) => {
			//Connection failed message
			});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }
  seedetail2(id) {
		this.navCtrl.push(DetailPage, {id: id});
	}

}
