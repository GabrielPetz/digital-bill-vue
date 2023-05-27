<template>
    <div class="result-box">
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <p class="bill-statistics">Estatísticas da fatura</p>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <ExpensesBox mode="total" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <ExpensesBox mode="min" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <ExpensesBox mode="max" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="bill-statistics">Histórico de gastos</p>
                        <HistoryChart />
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="bill-statistics">Lista de gastos</p>
                        <div class="report-result">
                            <Report />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <p class="bill-statistics">Metas de gastos</p>
                <GoalBar />
                <p class="bill-statistics">Gastos por categoria</p>
                <CategoryBar />
            </div>
        </div>
    </div>
</template>

<script>
import Report from "@/components/billReport/report/viewBill/Report";
import ExpensesBox from "@/components/billReport/report/viewBill/ExpensesBox";
import GoalBar from "@/components/billReport/report/viewBill/GoalBar";
import CategoryBar from "@/components/billReport/report/viewBill/CategoryBar";
import HistoryChart from "@/components/billReport/report/viewBill/HistoryChart";
import { defineComponent, reactive, ref, toRefs, computed } from "vue"

export default defineComponent({
    name: "ViewBillResultComponent",
    inject: ['apiResponse'],
    components: {
        Report, ExpensesBox, CategoryBar, HistoryChart, GoalBar
    },
    setup() {
        const data = reactive({
            billData: ref([]),
        });
        return { ...toRefs(data) }
    },
    created() {
        this.billData = this.apiResponse.value.apiData[0];
    },
    provide() {
        return {
            billData: computed(() => this.billData),
        }
    }
});
</script>

<style scoped>
.report-result {
    margin: 2rem 0rem;
}

.bill-statistics {
    font-size: 1.5em;
    font-weight: bold;
    margin: 1rem 0rem;
}
</style>