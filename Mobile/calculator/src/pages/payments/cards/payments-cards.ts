import {Component} from "@angular/core";
import {Payment} from "../../../model/Payment";
import {CreditSummary} from "../../../model/CreditSummary";

@Component({
  selector: 'payments-cards',
  templateUrl: 'payments-cards.html',
})
export class PaymentsCards{
  payments: Payment[];
  creditSummary: CreditSummary;

  ngOnInit(){
    this.payments = this.getCardsData();
    this.creditSummary = this.getCreditSummary();
  }

  getCreditSummary(){
    return {
      MonthlyPayment: 900,
      CreditSum: 1000,
      OverpaySum: 500,
      DebtSum: 500
    };
  }

  getCardsData(){
    return [
      {
        Number: 1,
        Date: new Date(),
        Balance: 1000,
        DebtPayment: 300,
        PercentPayment: 600,
        SumPayment: 900
      },
      {
        Number: 2,
        Date: new Date(),
        Balance: 100,
        DebtPayment: 100,
        PercentPayment: 0,
        SumPayment: 100
      },
      {
        Number: 2,
        Date: new Date(),
        Balance: 100,
        DebtPayment: 100,
        PercentPayment: 0,
        SumPayment: 100
      },
      {
        Number: 2,
        Date: new Date(),
        Balance: 100,
        DebtPayment: 100,
        PercentPayment: 0,
        SumPayment: 100
      },
      {
        Number: 2,
        Date: new Date(),
        Balance: 100,
        DebtPayment: 100,
        PercentPayment: 0,
        SumPayment: 100
      },
      {
        Number: 2,
        Date: new Date(),
        Balance: 100,
        DebtPayment: 100,
        PercentPayment: 0,
        SumPayment: 100
      }
    ];
  }
}
