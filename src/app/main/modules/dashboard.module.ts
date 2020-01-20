import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PodConfigurerComponent } from '../components/pod-configurer/pod-configurer.component';
import { VZ_POD_REGISTRY_STORE } from '../model/classes/utilities/Injection-tokens';
import { VzPodRegistry } from '../model/classes/statics/chart-registry';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { PodModule } from './pod.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    PodModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    DashboardComponent,
    PodConfigurerComponent
  ],
  providers: [
    {
      provide: VZ_POD_REGISTRY_STORE,
      useValue: VzPodRegistry
    }
  ]
})
export class DashboardModule { }
