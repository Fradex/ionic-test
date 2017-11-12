import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {ChartPage} from '../chart/chart';
import {currencyItems} from '../../components/currency';
import {PaymentsMain} from "../payments/main/payments-main";

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

  calculate() {
    this.navCtrl.setRoot(PaymentsMain);
  }
}
