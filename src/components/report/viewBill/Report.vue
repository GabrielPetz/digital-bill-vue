<template>
    <table id="result-table" class="table text-white">
        <thead>
            <th>Data/hora</th>
            <th>Categoria</th>
            <th>Origem</th>
            <th>Valor</th>
        </thead>
        <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
                <td>{{ expense.date }}</td>
                <td>{{ expense.category.name }}</td>
                <td>{{ expense.origin.name }}</td>
                <td>{{ expense.value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import digitalBillApi from "@/services/api";
export default {
    name: "ReportComponent",
    props: {
        billTag: String,
        categoriesIgnoreTags: Array,
        apiResponse: Array
    },
    data() {
        return {
            expenses: null,
        }
    },
    methods: {
        // async getData() {
        //     const response = await digitalBillApi.get(
        //         `/api/expense/?bill_tag=NUBANK_2018_11&limit=10`,
        //     ).then(response => {
        //         // this.expenses = response.data
        //         this.expenses = response.data.results
        //         console.log(response)
        //     })
        //     console.log(this.expenses)
        // }
    },
    created() {
    },
    // mounted() {
    //     console.log("ReportComponent mounted")
    //     // console.log(this.billId);
    //     // console.log(this.categoriesIgnoreIds);
    //     // console.log("==============================")
    // }
}
</script>

<style>

</style>