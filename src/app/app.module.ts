import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ToastService } from './toast.service';
import { Firebase } from '@ionic-native/firebase/ngx';

const config = {
  apiKey: 'AIzaSyBBaJO15JUjaSnsaqVSxTL7cg0PcvmODN0',
    authDomain: 'test-app-c625d.firebaseapp.com',
    databaseURL: 'https://test-app-c625d.firebaseio.com',
    projectId: 'test-app-c625d',
    storageBucket: 'test-app-c625d.appspot.com',
    messagingSenderId: '380661423779',
    appId: '1:380661423779:web:836ccab20243f5a4'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
