<template>
    <div class="result-box">
        <div class="row expenses-charts">
            <div class="col-4">
                <ExpensesBox mode="min" />
            </div>
            <div class="col-4">
                <ExpensesBox mode="max" />
            </div>
            <div class="col-4">
                <ExpensesBox mode="total" />
            </div>
        </div>
        <div class="report-result">
            <Report :expenses="response" />
        </div>
    </div>
</template>

<script>
import digitalBillApi from "@/services/api";
import Report from "./viewBill/Report";
import ExpensesBox from "./viewBill/ExpensesBox";

export default {
    name: "ViewBillResultComponent",
    components: {
        Report,
        ExpensesBox,
    },
    props: {
        response: Array
    },
    methods: {
        // async getData() {
        //     const response = digitalBillApi.get(
        //         `/api/bill_statistics/?tag=${this.selectedBill}`,
        //     ).then(response => {
        //         this.apiResponse = response.data
        //     });
        //     this.apiResponse = response.data
        // },
    },
    created() {
        // this.getData()
    },
    mounted() {
    }
}
</script>

<style scoped>
.result-box {
    margin-top: 3rem;
    border: 1px solid white;
    border-radius: 1rem;
    box-shadow: 2px 2px rgb(61, 61, 61);
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>