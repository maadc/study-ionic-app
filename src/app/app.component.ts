import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Themen',
      url: '/themenplakate',
      icon: 'paper'
    },
    {
      title: 'Aussteller',
      url: '/aussteller',
      icon: 'list'
    },
    {
      title: 'Lageplan',
      url: '/lageplan',
      icon: 'navigate'
    },
    {
      title: 'Programm',
      url: '/programm',
      icon: 'timer'
    },
    {
      title: 'Eintrittspreise',
      url: '/eintrittspreise',
      icon: 'wallet'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
