import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartPage } from '../chart/chart';
import { currencyItems } from '../../components/currency';

/***Модуль расчета */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {
  currencies: any[];
  segment: string;

  constructor(public navCtrl: NavController) {
    this.currencies = currencyItems;
    this.segment = "credit";
  }
}
