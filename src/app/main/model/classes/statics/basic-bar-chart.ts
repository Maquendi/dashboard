import { ChartOptionWrapper } from "../../interfaces/charts";

export const BasicBarChartOption: ChartOptionWrapper = {
 injectData: (data: any) => {
    BasicBarChartOption.options = {
            chart: {
                type: 'bar',
                width: 350,
                height: 300
            },
            title: {
                text: 'Historic World Population by Region',
                align: 'left'
            },
            subtitle: {
                //text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
            },
            xAxis: {
                categories: data.categories,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                // layout: 'vertical',
                // align: 'right',
                // verticalAlign: 'top',
                // x: -30,
                // y: 80,
                // floating: true,
                // borderWidth: 1,
                // backgroundColor: '#000000',
                // shadow: true
            },
            credits: {
                enabled: false
            },
            series: data.series
       }
    }
}