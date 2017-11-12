//Выплата
export class Payment{
  // Номер платежа
  Number:number;
  // Дата платежа
  Date: Date;
  // Остаток по выплатам
  Balance: number;
  // Оплата по основному долгу
  DebtPayment: number;
  // Оплата по процентам
  PercentPayment: number;
  //Сумма платежа
  SumPayment: number;
}
