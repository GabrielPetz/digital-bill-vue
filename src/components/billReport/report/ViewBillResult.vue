<template>
    <div class="result-box">
        <div class="row">
            <div class="col-lg-9">
                <p class="bill-statistics">Estatísticas da fatura: {{ billData.name }}</p>
                <div class="row">
                    <div class="col-12">
                        <ExpensesBox mode="total" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <ExpensesBox mode="min" />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <ExpensesBox mode="max" />
                    </div>
                </div>
                <div class="row">
                    <p class="bill-statistics">Lista de gastos</p>
                    <div class="report-result">
                        <Report />
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <p class="bill-statistics">Gastos por categoria</p>
                <CategoryBar />
            </div>
        </div>
    </div>
</template>

<script>
import Report from "@/components/billReport/report/viewBill/Report";
import ExpensesBox from "@/components/billReport/report/viewBill/ExpensesBox";
import CategoryBar from "@/components/billReport/report/viewBill/CategoryBar";
import { defineComponent, reactive, ref, toRefs, computed } from "vue"

export default defineComponent({
    name: "ViewBillResultComponent",
    inject: ['apiResponse'],
    components: {
        Report, ExpensesBox, CategoryBar
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
    font-size: 2em;
    font-weight: bold;
}
</style>