import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { PodService } from '../../model/services/pod.service';
import { VzPod } from '../../model/classes/implementations/BasicBarChart';

@Component({
  selector: 'pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.scss']
})
export class PodComponent implements OnInit {

  @Input('config') public podConfig: VzPod;

  public chart: Chart;

  constructor(private podService: PodService) {}

  ngOnInit() {
    this.initializeChart();
  }

  ngAfterViewInit(): void {}


  ngAfterContentInit(): void {}

  initializeChart() : void {
    this.loadData()
    this.refreshPod();
  }


  loadData() {
    this.podConfig.loadPodData(this.podService).subscribe(resp=> {
      this.chart = new Chart(resp.options);
    });
  }


  public refreshPod(timeLapse: number = 20000) {
    setInterval(()=> {
     this.loadData();
    }, timeLapse)
  }


}
