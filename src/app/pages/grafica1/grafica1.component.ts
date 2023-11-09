import {Component, Input} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = [ 'pan', 'azucae', 'leche' ];
  public data1: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 10, 20, 30 ], label: 'Prueba' },
  ];
}
