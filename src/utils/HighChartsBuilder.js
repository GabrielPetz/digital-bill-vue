import HighChartsConfigs from "@/utils/highchartsDefault";
import Formatter from "@/services/formatters"

export function mountPieChart(identifier, data) {
    const HighCharts = require("highcharts");
    HighCharts.setOptions(HighChartsConfigs.getDarkTheme());
    HighCharts.chart(identifier, {
        chart: {
            type: 'pie',
            height: 240,
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
        series: data,
        ...HighChartsConfigs.getDefaultCommonConfig(),
    })
}

export function mountBarChart(identifier, data) {
    const HighCharts = require("highcharts");
    HighCharts.setOptions(HighChartsConfigs.getDarkTheme());
    HighCharts.chart(identifier, {
        chart: {
            zoomType: 'xy'
        },
        tooltip: {
            shared: true
        },
        yAxis: [{
            tickInterval: 1,
            title: {
                text: 'Contagem de gastos'
            },
            opposite: true
        }, {
            tickInterval: 200,
            title: {
                text: 'Gastos (R$)'
            },
            labels: {
                formatter: (props) => {
                    return Formatter.currencyFormat(props.value)
                }
            },
        }],
        xAxis: [{
            type: 'datetime',
            labels: {
                formatter: (props) => {
                    return Formatter.dateFormat(props.value)
                }
            },
            crosshair: true
        }],
        plotOptions: {
            series: {
                borderWidth: 0,

            }
        },
        series: data,
        ...HighChartsConfigs.getDefaultCommonConfig(),
    })
}
