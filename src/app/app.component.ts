import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ToastService } from './toast.service';
import { ToastController } from '@ionic/angular';
import { FcmService } from './fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmService,
    private toastr: ToastService,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }

  private notificationSetup1() {
    /*
    this.fcm.getToken().then(token => {
      console.log('token:', token);
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    this.fcm.onNotification().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          console.log('\n=========ios========\n');
          console.log(msg.aps.alert);
          console.log('\n=========ios========\n');
          this.presentToast(msg.aps.alert);
        } else {
          console.log('\n=========android========\n');
          console.log(msg.body);
          console.log('\n=========android========\n');
          this.presentToast(msg.body);
        }

        if (msg.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });
      */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.notificationSetup();
    });
  }

  subscribe1() {
    this.fcm.subscribe1();
  }

  unsubscribe1() {
    this.fcm.unsubscribe1();
  }

  subscribe2() {
    this.fcm.subscribe2();
  }

  unsubscribe2() {
    this.fcm.unsubscribe2();
  }
}
