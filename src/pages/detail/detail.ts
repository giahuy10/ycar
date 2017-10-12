import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	 detail: any = {};
	 id: 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.id = this.navParams.get('id');
		this.http.get('http://driver.ycar.vn/index.php?option=com_uber&view=ajax&format=json&task=detail_json&job_id='+this.id).map(res => res.json()).subscribe(data => {
        this.detail = data;
			console.log(this.detail); 
		},
		err => { 
			console.log("Oops!");
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
