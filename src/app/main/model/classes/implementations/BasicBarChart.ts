import { BasicBarChartOption } from '../statics/basic-bar-chart';
import { PodService } from '../../services/pod.service';
import { IChart, ChartOptionWrapper, ChartDataFetch } from '../../interfaces/charts';
import { Observable } from 'rxjs';


export class VzChart implements IChart {
  constructor(
    public optionWrapper: ChartOptionWrapper,
      public chartDataFetchService: ChartDataFetch ,
  ) {
    
  }
}


export class VzPod{

    constructor(
      public id: string,
      private chart: IChart,
    ) {}

    loadPodData(service: PodService): Observable<ChartOptionWrapper> {
      const optionWrapper = this.chart.optionWrapper;
      const dataFetch = this.chart.chartDataFetchService;
      return dataFetch.fetchData(service, optionWrapper);
    }
  }


  // export class DynamicComponent implements IChart {
  //   constructor(parameters) {
      
  //   }
  // }