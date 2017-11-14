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
import {CalculationService} from "../../providers/calculation-service";

/***Модуль фильтров */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage implements OnInit  {
  currencies: any[];
  segment: string;
  model = {
    currency : 1,
    creditProcent: 0,
    initialFee: 1000,
    creditTerm: 1,
    realtySum: 1000
  };

  constructor(public navCtrl: NavController, private calculationService: CalculationService) {
  }

  /** Обработчик чобытия инициализации формы */
  ngOnInit(){
    this.segment = "credit";
    this.currencies = currencyItems;
  }

  /** Рассчитать */
  calculate() {
    this.calculationService.calculate();
    this.navCtrl.setRoot(PaymentsMain);
  }
}
