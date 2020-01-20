import { PodService } from '../services/pod.service';
import { Observable } from 'rxjs';

export interface IChart<T>{
    options: Highcharts.Options,
    dataResolver: ChartDataResolver<Observable<T>>
}


export interface DataFetcher<T, R>{
    fetchData(service: T, other?: any): R
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