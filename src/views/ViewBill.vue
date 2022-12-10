<template>
    <div>
        <ViewBillForm @getQueryEvent="getQueryEvent" />
        <div id="view-bill-result" class="row">
            <component :is="renderResult" :response="apiResponse"></component>
        </div>
    </div>
</template>

<script>
import digitalBillApi from "@/services/api";
import ViewBillResult from "../components/report/ViewBillResult"
import ViewBillForm from "../components/forms/ViewBillForm"
import NoDataFound from "../components/empty/NoDataFound.vue"
import EmptyResult from "../components/empty/EmptyResult.vue"
import { defineComponent, reactive, ref, toRefs } from "vue"

export default defineComponent({
    name: 'ViewBillView',
    components: {
        ViewBillForm, ViewBillResult, NoDataFound, EmptyResult
    },
    setup() {

        const data = reactive({
            apiResponse: ref([]),
            renderResult: ref(null),
            selectedBill: ref(null),
            selectedCategories: ref(null),
        });

        return { ...toRefs(data) }
    },
    methods: {
        getQueryEvent(kwargs) {
            this.selectedBill = kwargs.selectedBill;
            this.selectedCategories = kwargs.selectedCategories;
            this.renderResult = null;
            if (kwargs.selectedBill) {
                this.renderResult = "ViewBillResult";
                this.getData();
            } else {
                this.renderResult = "EmptyResult";
            }
            console.log(this.apiResponse)
        },
        async getData() {
            digitalBillApi.get("/api/expense/?bill_tag=NUBANK_2018_11")
                .then(response => this.apiResponse = response.data)
        }
    },
})
</script>

<style>
main.mt-auto {
    margin-top: 10% !important;
}
</style>
