<template>
    <div class="box-expenses">
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
            <div class="col-6" v-bind:id="`pie-chart-bill-${mode}`"></div>
            <div class="col-6" v-bind:id="`pie-chart-salary-${mode}`"></div>
        </div>
        
        <div v-bind:id="`history-chart-${mode}`"></div>
    </div>
</template>

<script>

import { mountPieChart } from "@/utils/HighChartsBuilder"
import { defineComponent, reactive, ref, toRefs, provide, onMounted } from "vue"
import { dateTimeFormat, currencyFormat } from "@/services/formatters";

export default defineComponent({
    name: "ExpensesBoxComponent",
    inject: ['statistics'],
    props: {
        mode: String,
    },
    methods: {
        billMinMount() {
            let minExpense = this.statistics.value.min_expense;
            let total = this.statistics.value.total - minExpense.value;
            let salary = this.statistics.value.salary;
            let salaryValue = this.statistics.value.salary.value - minExpense.value;

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
            let maxExpense = this.statistics.value.max_expense;
            let total = this.statistics.value.total - maxExpense.value;
            let salary = this.statistics.value.salary;
            let salaryValue = this.statistics.value.salary.value - maxExpense.value;

            mountPieChart(`bill-${this.mode}`, [{
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

            mountPieChart(`salary-${this.mode}`, [{
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
            this.mainValue = this.statistics.value.salary.name;
            let salaryValue = this.statistics.value.salary.value;
            let totalExpenses = this.statistics.value.total;
            this.footerValue = totalExpenses;
        },
        formatDate(date) {
            return dateTimeFormat(Date.parse(date));
        },
        formatValue(value) {
            return currencyFormat(value);
        }
    },
    mounted() {
        // console.log(this.statistics.value);
        let options = {
            min: this.billMinMount,
            max: this.billMaxMount,
            total: this.totalMount,
        }

        options[this.mode]()

    },
    setup() {
        const data = reactive({
            headerValue: ref(""),
            mainValue: ref(""),
            footerValue: ref(""),
        });
        return { ...toRefs(data) }
    }
})
</script>

<style scoped>
.box-expenses {
    border: 2px solid rgb(84, 87, 92);
    border-radius: 5px;
    /* max-width: 500px; */
    max-height: 1000px;
    margin: .5rem;
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