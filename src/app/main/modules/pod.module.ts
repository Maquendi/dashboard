import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodComponent } from '../components/pod/pod.component';
import { PodContainerComponent } from '../components/pod-container/pod-container.component';
import { MuuriGridDirective } from '../model/directives.ts/murri-directive';
import { MuuriGridItemDirective } from '../model/directives.ts/muuri-item-directive';
import { ChartModule } from 'angular-highcharts';
import { PodService } from '../model/services/pod.service';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [
    MuuriGridDirective,
    MuuriGridItemDirective,
    PodContainerComponent,
    PodComponent
  ],
  exports: [
    PodContainerComponent
  ], 
  providers: [
    PodService
  ]
})
export class PodModule { }
