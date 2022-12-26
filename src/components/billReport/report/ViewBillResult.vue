<template>
    <div class="result-box">
        <p class="bill-statistics">Estatísticas da fatura</p>
        <div class="row">
            <div class="col-12">
                <ExpensesBox mode="total" />
            </div>
            <div class="col-6">
                <ExpensesBox mode="min" />
            </div>
            <div class="col-6">
                <ExpensesBox mode="max" />
            </div>
        </div>
        <p class="bill-statistics">Lista de gastos</p>
        <div class="report-result">
            <Report />
        </div>
    </div>
</template>

<script>
import Report from "@/components/billReport/report/viewBill/Report";
import ExpensesBox from "@/components/billReport/report/viewBill/ExpensesBox";
import { defineComponent, reactive, ref, toRefs, computed } from "vue"

export default defineComponent({
    name: "ViewBillResultComponent",
    inject: ['apiResponse'],
    components: {
        Report, ExpensesBox,
    },
    setup() {
        const data = reactive({
            expenses: ref([]),
            statistics: ref([]),
        });
        return { ...toRefs(data) }
    },
    created() {
        let extractedData = this.apiResponse.value.apiData[0];
        this.statistics = extractedData.expenses.statistics;
        this.expenses = {
            expenseList: extractedData.expenses.all_expenses,
            total: this.statistics.total
        };
    },
    provide() {
        return {
            expenses: computed(() => this.expenses),
            statistics: computed(() => this.statistics),
        }
    }
});
</script>

<style scoped>
.result-box {
    
}

.report-result {
    margin: 2rem 0rem;
}

.bill-statistics {
    font-size: 2em;
    font-weight: bold;
}
</style>