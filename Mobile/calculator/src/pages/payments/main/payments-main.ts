import {Component} from "@angular/core";
import {PaymentsCards} from "../cards/payments-cards";
import {PaymentsCharts} from "../charts/payments-charts";
import {PaymentsGrid} from "../grid/payments-grid";
import {ToastController} from "ionic-angular";

@Component({
  selector: 'page-payments-main',
  templateUrl: 'payments-main.html'
})
export class PaymentsMain {
  paymentsCards: any = PaymentsCards;
  paymentsCharts: any = PaymentsCharts;
  paymentsGrid: any = PaymentsGrid;

  constructor(private toastCtrl: ToastController){

  }

  saveCalculation(){
    this.toastCtrl.create({
      message: 'Типа сохранили',
      duration: 3000,
      position: 'top'
    }).present();
  }

  shareCalculation(){
    this.toastCtrl.create({
      message: 'Типа поделились',
      duration: 3000,
      position: 'top'
    }).present();
  }
}
