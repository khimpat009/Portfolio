import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private sms: SMS) {

  }

  textnow() {
  	var option={
  		replaceLineBreaks: false,
  		android: {
  			intent: 'INTENT'
  		}
  	}
	this.sms.send('09957840689', 'Hello world!', options)
	.then(()=>{
		alert("success");
	},()=>{
		alert("failed");
	});
  }

}