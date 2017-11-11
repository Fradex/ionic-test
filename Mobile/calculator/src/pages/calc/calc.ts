import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartPage } from '../chart/chart';
import { currencies } from '../../components/currency';

/***Модуль расчета */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {
  currencies = currencies;
  segment = "credit";

  constructor(public navCtrl: NavController) {

  }
}
