import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartPage } from '../chart/chart';
import { currencyItems } from '../../components/currency';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

/***Модуль расчета */
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {
  currencies: any[] = [{
    id: 2,
    name: "Доллар"
  }, {
    id: 1,
    name: "Рубль"
  }];
  segment: string;
  public form: FormGroup;

  constructor(public navCtrl: NavController, private _fb: FormBuilder) {
    this.segment = "credit";
    this.form = _fb.group({
      'creditSum': ['', Validators.required]
    });
  }
}
