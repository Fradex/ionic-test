import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HistoryPage } from '../pages/history/history';
import { ChartPage } from '../pages/chart/chart';


import { CalcPage } from '../pages/calc/calc';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = CalcPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCalc(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalcPage);
  }goToHistory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryPage);
  }goToChart(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChartPage);
  }
}
