import {Component} from "@angular/core";
import {Payment} from "../../../model/payment";
import {CreditSummary} from "../../../model/credit-summary";
import {CalculationService} from "../../../providers/calculation-service";

@Component({
  selector: 'payments-cards',
  templateUrl: 'payments-cards.html',
})
export class PaymentsCards{
  payments: Payment[];
  creditSummary: CreditSummary;

  constructor(private calculationService: CalculationService){

  }

  ngOnInit(){
    let calcResult = this.calculationService.getCalculationResult();

    this.payments = calcResult.Payments;
    this.creditSummary = calcResult.CreditSummary;
  }
}
