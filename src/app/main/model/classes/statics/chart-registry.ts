import { BasicBarChart, StackedBarChart, BasicLineChart, VzPod } from '../implementations/BasicBarChart';


export const VzPodRegistry: VzPod[] = [
  new VzPod('pod-1', 'A new stacked bar chart', new StackedBarChart()),
  new VzPod('pod-2', 'A new Line chart',new BasicLineChart()),
  new VzPod('pod-3', 'A new bar chart', new BasicBarChart()),
  new VzPod(
    'pod-4', 
    'Another new stacked bar chart', 
    new StackedBarChart(),
    null,
   'loadWorldPopulationData'),
];

