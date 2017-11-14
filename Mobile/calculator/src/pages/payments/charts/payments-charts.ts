import {Component} from "@angular/core";
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'payments-charts',
  templateUrl: 'payments-charts.html'
})
export class PaymentsCharts{
  constructor(){

  }
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });
}
