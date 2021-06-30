import { Component, OnInit } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  title: string = 'Sin titutlo';
  doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: MultiDataSet = [
    [500, 10, 100],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
