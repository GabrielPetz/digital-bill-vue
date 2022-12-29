import HighChartsTheme from "@/utils/highchartsDefault";

export function mountPieChart(identifier, data) {
    const HighCharts = require("highcharts");
    HighCharts.setOptions(HighChartsTheme);
    HighCharts.chart(identifier, {
        chart: {
            type: 'pie',
            height: 240,
        },
        exporting: {
            enabled: false,
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.2f}%</b> do(s) {series.name}  <br/> Valor: <b>R$ {point.y:.2f}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: data
    })
}
