import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	public userDetails : any;
public resposeData : any;	
userPostData = {
    "user_id": "",
    "token": ""
   
  };
  shownGroup = null;

  constructor(public navCtrl: NavController, public authService: AuthService) {
	   const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.userPostData.token = this.userDetails.token;
		this.authService.postData(this.userPostData, "completed").then((result) =>{
			this.resposeData = result;
			console.log(this.resposeData);
			if(this.resposeData.userData){
			 localStorage.setItem('userData', JSON.stringify(this.resposeData));
			
		  }

		}, (err) => {
      //Connection failed message
    });
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
}