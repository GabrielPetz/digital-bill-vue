<template>
    <div class="round-border">

        <table id="result-table" class="table text-white">
            <thead>
                <th>Data/hora</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Origem</th>
                <th>Valor</th>
            </thead>
            <tbody>
                <tr v-for="expense in expenses" :key="expense.id" class="t-row">
                    <td>{{ formatDate(expense.date) }}</td>
                    <td>{{ expense.name }}</td>
                    <td>{{ expense.category.name }}</td>
                    <td>{{ expense.origin.name }}</td>
                    <td>{{ formatValue(expense.value) }}</td>
                </tr>
            </tbody>
            <tfoot class="footer">
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ formatValue(statistics.total) }}</td>
                </tr>
            </tfoot>
        </table>
    </div>

</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import Formatter from "@/services/formatters"

export default defineComponent({
    name: "ReportComponent",
    inject: ['billData'],
    methods: {
        formatDate(date) {
            return Formatter.dateTimeFormat(Date.parse(date));
        },
        formatValue(value) {
            return Formatter.currencyFormat(value);
        }
    },
    setup() {
        const data = reactive({
            expenses: ref(Array),
            statistics: ref(Array),
        });
        return { ...toRefs(data) }
    },
    mounted() {
        let expensesData = this.billData.value.expenses;
        this.expenses = expensesData.all_expenses;
        this.statistics = expensesData.statistics;
    },

})
</script>

<style>
.currency-grid {
    display: grid;
    grid-template-columns: 2fr 3rem;
}

.footer {
    font-weight: bold;
}

.t-row {
    border: 0px solid white;
    border-radius: 1rem;
}

.t-row:hover {
    background-color: white;
    color: black;
    
}
</style>
