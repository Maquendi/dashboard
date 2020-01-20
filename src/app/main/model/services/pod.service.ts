import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BarChartDataModel, LineChartDataModel, ISerie } from '../interfaces/charts';
import { PopulationModel } from '../classes/implementations/BasicBarChart';


@Injectable()
export class PodService {

  constructor(private $http: HttpClient) { }


  public loadData(methodToCall: string): Observable<any> {
   return this[methodToCall]();
  }


  // this method will be called for all pod with bars charts
  loadBarChartData(methodToCall: string): Observable<BarChartDataModel> {
    console.log('loadBarChartData called...')
   return this.$http.get("../../../../assets/mock-data/world-populate.json")
   .pipe(map((resp: any) => {
     return resp;
   }));
  }


  findEquals(arr:any[], propertie: string){
   
   for(let i=0; i < arr.length; i++){
     
    }
  }




  loadLineChartData(clientMethodName: string) : Observable<LineChartDataModel> {
    return this.$http.get("../../../../assets/mock-data/solar-employment-growth.json")
    .pipe(map((resp: any) => {
      return resp.data;
    }))
  }


  protected loadWorldPopulationData(): Observable<any>{
    return this.$http.get(
      "../../../../assets/mock-data/world-population.json"
    ).pipe(map(resp => {
      console.log(resp);
      return resp;
    }));
  }


}
