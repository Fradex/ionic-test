import {Payment} from "../model/payment";
import {CreditSummary} from "../model/credit-summary";
import {CalculationResult} from "../model/calculation-result";

//Сервис расчета кредита
export class CalculationService {
  payments: Payment[];
  creditSummary: CreditSummary;

  constructor(){

  }

  //Выполнить расчет
  calculate() {
    this.creditSummary = {
      MonthlyPayment: 300,
      CreditSum: 3000,
      OverpaySum: 1000,
      DebtSum: 2000
    };

    this.payments = [
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

  //Получить последний результат расчета
  getCalculationResult(): CalculationResult {
    return {
      Payments: this.payments,
      CreditSummary: this.creditSummary
    };
  }
}
