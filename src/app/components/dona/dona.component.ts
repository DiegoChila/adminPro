import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin titutlo';
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [100, 100, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {backgroundColor: ['#6857e6', '#009fee', '#f02059']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
