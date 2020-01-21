import { VzPod, VzChart } from '../implementations/BasicBarChart';
import { BasicLineChartOption } from './basic-line-chart';
import { BasicBarChartOption } from './basic-bar-chart';
import { PodService } from '../../services/pod.service';
import { ChartOptionWrapper } from '../../interfaces/charts';
import { map } from 'rxjs/operators';
import { pieChart } from './pie-chart';


export const VzPodRegistry: VzPod[] = [

  new VzPod('pod-1', new VzChart(BasicBarChartOption,{
     fetchData: (podService: PodService, options: ChartOptionWrapper)=>{
      return podService.loadBarChartData().pipe(map(resp => {
         options.injectData(resp);
         return options; 
       })
      )
     }
   }
  )),

  new VzPod('pod-3', new VzChart(BasicLineChartOption,{
      fetchData: (podService: PodService, options: ChartOptionWrapper) => {
        return podService.loadBarChartData().pipe(map(resp=> {
          console.log(resp)
          options.injectData(resp);
          return options;
        }))
      }
    })
  ),

  new VzPod('pod-4',new VzChart(BasicLineChartOption,{
      fetchData: (podService: PodService, options: ChartOptionWrapper) => {
        return podService.loadLineChartData()
        .pipe(map(resp => {
          
          let data = {series: resp.data};
          console.log(data)
          options.injectData(data);
          return options;
        }))
      }
    }
  )),

new VzPod('pod-5',new VzChart(pieChart,{
  fetchData: (service: PodService, options: ChartOptionWrapper) => {
      return service.loadPieChartData().pipe(map(resp => {
        options.injectData(resp);
        return options;
      }))
    }
  })
)

];

