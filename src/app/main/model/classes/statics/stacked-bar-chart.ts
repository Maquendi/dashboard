import { ChartOptionWrapper } from '../../interfaces/charts';

export const StackedBarChartOption: ChartOptionWrapper = {
 injectData:(data)=> {
   StackedBarChartOption.options = {
    chart: {
        type: 'bar',
        width: 350,
        height: 300
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: data.categories
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    credits: {
     enabled: false
    },
    legend: {
        reversed: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: data.series

     }
   }
}