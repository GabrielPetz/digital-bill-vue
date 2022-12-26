<template>
    <table id="result-table" class="table text-white">
        <thead>
            <th>Data/hora</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Origem</th>
            <th>Valor</th>
        </thead>
        <tbody>
            <tr v-for="expense in expenses.value.expenseList" :key="expense.id">
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
                <td>{{ formatValue(expenses.value.total) }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import { defineComponent } from "vue"
import  { dateTimeFormat, currencyFormat } from "@/services/formatters";

export default defineComponent({
    name: "ReportComponent",
    inject: ['expenses'],
    methods: {
        formatDate(date) {
            return dateTimeFormat(Date.parse(date));
        },
        formatValue(value) {
            return currencyFormat(value);
        }
    },
    created() {
        console.log(this.expenses.value)
    }
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
</style>
