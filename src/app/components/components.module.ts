import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DonaComponent } from './dona/dona.component';
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
