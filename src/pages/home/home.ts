import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.tabBarElement = document.querySelector('.tabbar');

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Testing',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 6000);
  }


}
