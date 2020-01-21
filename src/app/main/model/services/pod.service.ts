import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class PodService {

  constructor(private $http: HttpClient) { }

  counter = true;


  public loadData(methodToCall: string): Observable<any> {
   return this[methodToCall]();
  }


  loadPieChartData(): Observable<any> {
    return this.$http.get('../../../../assets/mock-data/pie-chart-data.json');
  }

  // this method will be called for all pod with bars charts
  loadBarChartData(): Observable<any> {
   const api = this.counter ? "../../../../assets/mock-data/world-populate.json" : "../../../../assets/mock-data/world-population.json";
   this.counter = !this.counter;
   return this.$http.get(api)
   .pipe(map((resp: any) => {
     return resp;
   }));
  }


  findEquals(arr:any[], propertie: string){
   
   for(let i=0; i < arr.length; i++){
     
    }
  }




  loadLineChartData() : Observable<any> {
    return this.$http.get("../../../../assets/mock-data/solar-employment-growth.json")
    .pipe(map((resp: any) => {
      return resp;
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
