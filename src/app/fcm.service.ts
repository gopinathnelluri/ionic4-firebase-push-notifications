import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private firebase: Firebase, private afs: AngularFirestore, private platform: Platform) { }

  async getToken() {
    let token: string;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }

    console.log('\n=======token=======\n');
    // alert(token);
    console.log(token);
    console.log('\n=======token=======\n');
    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) { return; }

    const devicesRef = this.afs.collection('devices');

    const data = {
      token,
      userId: 'testUserId'
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }

  subscribe1() {
    this.firebase.subscribe('station1').then((data) => {
      alert(data);
    });
  }

  unsubscribe1() {
    this.firebase.unsubscribe('station1').then((data) => {
      alert(data);
    });
  }

  subscribe2() {
    this.firebase.subscribe('station2').then((data) => {
      alert(data);
    });
  }

  unsubscribe2() {
    this.firebase.unsubscribe('station2').then((data) => {
      alert(data);
    });
  }
}
