import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { AlertController } from 'ionic-angular';
//import {Page} from '@ionic-angular';
import {DetailPage} from '../detail/detail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
	detailPage = DetailPage;
	public userDetails : any;
public resposeData : any;
public message_alert: any;	
public notice_alert: any;
public posttype: any;
userPostData = {
    "user_id": "",
    "token": "",
	"job_id": "",
	"reason": ""
   
  };

shownGroup = null;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {
	    const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.userPostData.token = this.userDetails.token;
		this.authService.postData(this.userPostData, "bought").then((result) =>{
			this.resposeData = result;
			console.log(this.resposeData);
			if(this.resposeData.userData){
			 localStorage.setItem('userData', JSON.stringify(this.resposeData));
			
			}

			}, (err) => {
			//Connection failed message
			});
	 
	}
	public getposts(){
		 const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.userPostData.token = this.userDetails.token;
		this.authService.postData(this.userPostData, "bought").then((result) =>{
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
	toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};
	
	presentAlert(notice) {
	  const alert = this.alertCtrl.create({
		title: 'Xác nhận',
		subTitle: notice,
		buttons: ['Đóng']
	  });
	  alert.present();
	}
	
	presentConfirm(id) {
	
		
		
		const alert = this.alertCtrl.create({
		title: 'Xác nhận hành động',
		message: 'Bạn đã đón được khách?',
		buttons: [
		  {
			text: 'Chưa',
			role: 'cancel',
			handler: () => {
			  console.log('Cancel clicked');
			}
		  },
		  {
			text: 'Đã đón',
			handler: () => {
					
			this.userPostData.user_id = this.userDetails.user_id;
			this.userPostData.token = this.userDetails.token;	
			this.userPostData.job_id = id;
			 
					this.authService.postData(this.userPostData, "taken_client").then((result) =>{
					
					console.log(result);
					this.presentAlert("Chúc mừng bạn đã đón khách thành công!")
					}, (err) => {
					//Connection failed message
					});
			 
			}
		  }
		]
	  });
	  alert.present();
	}
	presentPrompt(id) {
	  const alert = this.alertCtrl.create({
		title: 'Hủy chuyến',
		inputs: [
		  {
			name: 'reason',
			placeholder: 'Lý do hủy chuyến:'
		  }
		],
		buttons: [
		  {
			text: 'Quay lại',
			role: 'cancel',
			handler: data => {
			  console.log('Cancel clicked');
			}
		  },
		  {
			text: 'Hủy chuyến',
			handler: data => {
				this.userPostData.user_id = this.userDetails.user_id;
				this.userPostData.token = this.userDetails.token;	
				this.userPostData.job_id = id;
				this.userPostData.reason = data.reason;
				this.authService.postData(this.userPostData, "cancel").then((result) =>{
					
					console.log(result);
					this.presentAlert("Yêu cầu hủy chuyến đã được gửi. YCar sẽ xử lý trong thời gian sớm nhất!")
					}, (err) => {
					//Connection failed message
					});
			}
		  }
		]
	  });
	  alert.present();
	}
}
