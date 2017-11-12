import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { currencyItems } from '../../components/currency';
import { PaymentsMain } from "../payments/main/payments-main";
import { OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

/***Модуль фильтров */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage implements OnInit  {
  currencies: any[];
  segment: string;
  model = {
    currency : 1
  };

  constructor(public navCtrl: NavController) {
  }

  /** Обработчик чобытия инициализации формы */
  ngOnInit(){
    this.segment = "credit";
    this.currencies = currencyItems;
    this.model.currency = 1;
  }

  /** Рассчитать */
  calculate() {
    this.navCtrl.setRoot(PaymentsMain);
  }
}
