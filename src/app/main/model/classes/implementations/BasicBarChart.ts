import { BasicBarChartOption } from '../statics/basic-bar-chart';
import { IChart, BarChartDataModel, ChartDataResolver, LineChartDataModel, DataFetcher } from '../../interfaces/charts';
import { StackedBarChartOption } from '../statics/stacked-bar-chart';
import { BasicLineChartOption } from '../statics/basic-line-chart';
import { Observable } from 'rxjs';
import { PodService } from '../../services/pod.service';
import { map } from 'rxjs/operators';
import { Series } from 'highcharts';


export abstract class AbstractChart implements IChart<BarChartDataModel>{
    public dataResolver: ChartDataResolver<Observable<BarChartDataModel>> = {
        load: (service: PodService, methodName: string)=> {
          return service.loadBarChartData(methodName).pipe(
              map(resp => {
                this.options.series = resp.series;
                this.options.xAxis.categories = resp.categories;
                console.log(this.options)
               return resp;
            })
          );
        }
      };
      constructor(public options: any){}
   }

export class BasicBarChart extends AbstractChart{
    constructor(public options: any = BasicBarChartOption) { 
        super(options) 
     }
}


export class BasicLineChart implements IChart<LineChartDataModel>{
    public dataResolver: ChartDataResolver<Observable<LineChartDataModel>> = {
        load: (service: PodService, methodName: string)=> {
          return service.loadLineChartData(methodName).pipe(
              map(resp => {
                this.options.series = resp;
                return resp;
              })
          );
        }
    };
    constructor(
        public options: any = BasicLineChartOption
    ) {}
}

export class StackedBarChart extends AbstractChart {
    constructor(public options:any = StackedBarChartOption) {
        super(options)
    }
}

export class VzPod implements DataFetcher<PodService, Observable<any>> {

    constructor(
      public id: string,
      public title: string,
      public chart: IChart<any>,
      public subTitle?: string,
      public method?: string
    ) {}

    fetchData(service: PodService): Observable<any> {
        return this.chart.dataResolver.load(service, this.method);
    }

  }
  

  export class PopulationModel {
      constructor(
        private model: any 
      ) {
          this.init();
        }

    private init(): void {
     Object.keys(this.model).forEach((key, index) => {
      this[key] = this.model[key];
     });
    }

    equals(o: this): boolean{
      return o[0] == this[0];
    }
  }