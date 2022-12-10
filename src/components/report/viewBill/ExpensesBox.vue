<template>
    <div class="box-expenses">
        <div class="box-expenses-header">
            <span>Maior Gasto</span>
        </div>
        <div class="box-expenses-main">
            <span>Algo</span>
        </div>
        <div class="box-expenses-footer">
            <span>R$ 1000,00</span>
        </div>
        <div v-bind:id="`pie-chart-${mode}`" class="pie-chart"></div>
        <div class="history-chart"></div>
    </div>
</template>

<script>
const HighCharts = require("highcharts");
import HighChartsTheme from "../../../utils/highchartsDefault";

HighCharts.setOptions(HighChartsTheme);

export default {
    name: "ExpensesBoxComponent",
    props: {
        mode: String,
        billTag: String,
    },
    data() {
        return {
            highchartsData: null,
        }
    },
    mounted() {
        HighCharts.chart(`pie-chart-${this.mode}`, {
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
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            series: [{
                name: 'Gastos',
                colorByPoint: true,
                data: [
                    {
                        name: "Maior Gast",
                        y: 20,
                        selected: true,
                        sliced: true
                    }, {
                        name: 'Total',
                        y: 40,
                    }
                ]
            }]
        })
    }
}
</script>

<style scoped>
.box-expenses {
    border: 2px solid rgb(84, 87, 92);
    ;
    border-radius: 5px;
    max-width: 500px;
    max-height: 1000px;
}

.box-expenses-header {
    font-size: 35px;
    text-align: center;
}

.box-expenses-main {
    padding-left: 10px;
    text-align: left;
}

.box-expenses-footer {
    font-size: 25px;
    text-align: center;
}
</style>