import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactlist: any;
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private contacts: Contacts) {

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

    submitForm() {
        let contactsfound
        this.contacts.pickContact().then((contacts) => {
            alert("INSIDE PROMISE")
            contactsfound = contacts;
        })

        if (contactsfound.length == 0)
            alert('No Contacts found');
    }

}
