import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {

  constructor(public navCtrl: NavController) {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //Chart Labels
  public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  //Chart data
  public barChartData:any[] = [
    {data: [66, 55, 83, 82, 56, 51, 43], label: 'Loss'},
    {data: [29, 38, 40, 21, 82, 30, 89], label: 'Profit'}
  ];
 
  // Chart events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}
