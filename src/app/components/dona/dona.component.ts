import {Component, Input} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title = 'Sin titulo';

  // Doughnut
  @Input('labels') public doughnutChartLabels: string[] = [ 'label 1', 'label 2', 'label 3' ];
  @Input('data') public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 350, 450, 100 ], label: 'Series A' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };
}
