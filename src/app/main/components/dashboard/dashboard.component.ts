import { Component, OnInit, Inject } from '@angular/core';
import { IChart } from '../../model/interfaces/charts';
import { VZ_POD_REGISTRY_STORE } from '../../model/classes/utilities/Injection-tokens';
import { PodService } from '../../model/services/pod.service';
import { VzPod } from '../../model/classes/implementations/BasicBarChart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayPodConfigurer: boolean = false;

  charts2Render: VzPod[] = [];

  constructor(@Inject(VZ_POD_REGISTRY_STORE) public totalChartOptions: VzPod[], private podService: PodService) { 

  }

  ngOnInit() {
    this.charts2Render=this.totalChartOptions;    
  }

  onClick($event){
    console.log($event)
  }

  onConfigurationSelected(chart: IChart){
   let arr=[] ;
   Object.assign(arr, this.charts2Render);
   arr.push(chart);
   this.charts2Render = arr;
   //this.charts2Render.push(chart);
  }

}
