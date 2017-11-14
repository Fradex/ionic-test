import {Payment} from "./payment";
import {CreditSummary} from "./credit-summary";

// Результат расчета
export class CalculationResult{
  //Выплаты
  Payments: Payment[];

  //Сводка по кредиту
  CreditSummary: CreditSummary;
}
