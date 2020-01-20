import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { PodService } from '../../model/services/pod.service';
import { VzPod } from '../../model/classes/implementations/BasicBarChart';

@Component({
  selector: 'pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.scss']
})
export class PodComponent implements OnInit {

  @Input('config') public pod: VzPod;

  public chart: Chart; //Highcharts.Chart;

  constructor(private podService: PodService) {}

  ngOnInit() {
    this.initializeChart();
  }

  ngAfterViewInit(): void {
    // setInterval(()=> {
    //  this.pod.fetchData(this.podService).subscribe(resp => {
    //    //console.log(resp)
    //   this.pod.chart.options.series = resp;
    //  })
    // },20000)
  }


  ngAfterContentInit(): void {}

  initializeChart() : void{

    this.chart = new Chart(this.pod.chart.options);

    // this.chart = Highcharts.chart(
    //   this.pod.id,
    //   this.pod.chart.options
    // );
    // this.chart.addCredits({
    //   enabled: false
    // });
    // this.chart.setTitle({
    //   text: this.pod.title
    //  });
  }


}
