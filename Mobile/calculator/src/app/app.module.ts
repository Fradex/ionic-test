import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalcPage } from '../pages/calc/calc';
import { HistoryPage } from '../pages/history/history';
import { ChartModule } from 'angular-highcharts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PaymentsMain} from "../pages/payments/main/payments-main";
import {PaymentsCards} from "../pages/payments/cards/payments-cards";
import {PaymentsCharts} from "../pages/payments/charts/payments-charts";
import {PaymentsGrid} from "../pages/payments/grid/payments-grid";
import {CalculationService} from "../providers/calculation-service";

@NgModule({
  declarations: [
    MyApp,
    CalcPage,
    HistoryPage,
    PaymentsMain,
    PaymentsCards,
    PaymentsCharts,
    PaymentsGrid
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      monthShortNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт ', 'Ноя', 'Дек' ]
    }),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalcPage,
    HistoryPage,
    PaymentsMain,
    PaymentsCards,
    PaymentsCharts,
    PaymentsGrid
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalculationService
  ]
})
export class AppModule {}
