<template>
    <div class="round-border default-margin box-expenses">
        <div class="box-expenses-header">
            <span>{{ headerValue }}</span>
        </div>
        <div class="box-expenses-main">
            <span>{{ mainValue }}</span>
        </div>
        <div class="box-expenses-footer">
            <span>{{ formatValue(footerValue) }}</span>
        </div>
        <div class="row">
            <div class="col-6" :id="`pie-chart-bill-${mode}`"></div>
            <div class="col-6" :id="`pie-chart-salary-${mode}`"></div>
        </div>
        <div v-bind:id="`history-chart-${mode}`"></div>
    </div>
</template>

<script>

import { mountPieChart } from "@/utils/HighChartsBuilder"
import { defineComponent, reactive, ref, toRefs } from "vue"
import Formatter from "@/services/formatters"

export default defineComponent({
    name: "ExpensesBoxComponent",
    inject: ['billData'],
    props: {
        mode: String,
    },
    methods: {
        billMinMount() {
            let minExpense = this.statistics.min_expense;
            let total = this.statistics.total - minExpense.value;
            let salary = this.salary;
            let salaryValue = salary.value - minExpense.value;

            mountPieChart(`bill-${this.mode}`, [{
                name: 'Gastos',
                colorByPoint: true,
                data: [{
                    name: minExpense.name,
                    y: minExpense.value,
                    selected: true,
                    sliced: true
                }, {
                    name: 'Outros gastos',
                    y: total,
                }]
            }]);

            mountPieChart(`salary-${this.mode}`, [{
                name: 'Gastos',
                colorByPoint: true,
                data: [{
                    name: minExpense.name,
                    y: minExpense.value,
                    selected: true,
                    sliced: true
                }, {
                    name: salary.name,
                    y: salaryValue,
                }]
            }]);
            this.headerValue = "Menor gasto"
            this.mainValue = `${minExpense.name} (${minExpense.category.name})`;
            this.footerValue = minExpense.value;
        },
        billMaxMount() {
            let maxExpense = this.statistics.max_expense;
            let total = this.statistics.total - maxExpense.value;
            let salary = this.salary;
            let salaryValue = salary.value - maxExpense.value;

            mountPieChart(`pie-chart-bill-${this.mode}`, [{
                name: 'Gastos',
                colorByPoint: true,
                data: [{
                    name: maxExpense.name,
                    y: maxExpense.value,
                    sliced: true
                }, {
                    name: 'Outros gastos',
                    y: total,
                }]
            }]);

            mountPieChart(`pie-chart-salary-${this.mode}`, [{
                name: 'Gastos',
                colorByPoint: true,
                data: [{
                    name: maxExpense.name,
                    y: maxExpense.value,
                    selected: true,
                    sliced: true
                }, {
                    name: salary.name,
                    y: salaryValue,
                }]
            }]);
            this.headerValue = "Maior gasto"
            this.mainValue = `${maxExpense.name} (${maxExpense.category.name})`;
            this.footerValue = maxExpense.value;
        },
        totalMount() {
            this.headerValue = "Total";
            this.mainValue = this.salary.name;
            let salaryValue = this.salary.value;
            let totalExpenses = this.statistics.total;
            this.footerValue = totalExpenses;
        },
        formatDate(date) {
            return Formatter.dateTimeFormat(Date.parse(date));
        },
        formatValue(value) {
            return Formatter.currencyFormat(value);
        }
    },
    setup() {
        const data = reactive({
            statistics: ref(Object),
            salary: ref(Object),

            headerValue: ref(""),
            mainValue: ref(""),
            footerValue: ref(""),
        });
        return { ...toRefs(data) }
    },
    mounted() {
        let data = this.billData.value;
        this.statistics = data.expenses.statistics;
        this.salary = data.salary;
        
        let options = {
            min: this.billMinMount,
            max: this.billMaxMount,
            total: this.totalMount,
        }

        options[this.mode]()

    },
})
</script>

<style scoped>
.box-expenses {
    max-height: 1000px;
}

.highcharts-container {
    border-radius: 0.75rem;
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