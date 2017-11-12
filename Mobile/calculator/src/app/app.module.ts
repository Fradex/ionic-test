import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalcPage } from '../pages/calc/calc';
import { HistoryPage } from '../pages/history/history';
import { ChartPage } from '../pages/chart/chart';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CalcPage,
    HistoryPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      monthShortNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт ', 'Ноя', 'Дек' ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalcPage,
    HistoryPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}