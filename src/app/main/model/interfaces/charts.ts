import { PodService } from '../services/pod.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IChart{
    optionWrapper: ChartOptionWrapper,
    chartDataFetchService: ChartDataFetch,
}


export interface DataFetcher<T, R>{
    fetchData(service: T, other?: any): R
}

export interface ChartOptionWrapper {
    injectData(data: any);
    options?: any;
}

export interface ChartDataFetch{
    fetchData(podService: PodService, optionsWrapper: ChartOptionWrapper): Observable<ChartOptionWrapper>;
  }
  

export interface ISerie{
    name: string;
    data: any[]
}

export interface BarChartDataModel{
    categories: string[],
    series: Array<ISerie>
}

export interface LineChartDataModel {
  series: Array<ISerie>
}


export interface ChartDataResolver<T> {
    load(service: PodService, clientMehtodName: string): T
}