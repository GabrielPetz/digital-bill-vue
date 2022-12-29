<template>
    <div>
        <ViewBillForm @getQueryEvent="getQueryEvent" />
        <div id="view-bill-result" class="row dynamic-component">
            <!-- <component :is="renderResult" :response="apiResponse"></component> -->
            <component :is="renderResult"></component>
        </div>
    </div>
</template>

<script>
import digitalBillApi from "@/services/api";
import ViewBillResult from "@/components/billReport/report/ViewBillResult"
import ViewBillResultSwitch from "@/components/billReport/report/ViewBillResult"
import ViewBillForm from "@/components/billReport/forms/ViewBillForm"
import NoDataFound from "@/components/empty/NoDataFound.vue"
import EmptyResult from "@/components/empty/EmptyResult.vue"
import { defineComponent, reactive, ref, toRefs, computed } from "vue"

export default defineComponent({
    name: 'ViewBillView',
    components: {
        ViewBillForm, NoDataFound, EmptyResult,
        ViewBillResult, ViewBillResultSwitch
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
        async getQueryEvent(kwargs) {
            this.selectedBill = kwargs.selectedBill;
            this.selectedCategories = kwargs.selectedCategories;
            this.ignorableCaterogies = kwargs.ignorableCaterogies;
 
            this.renderResult = null;
            if (kwargs.selectedBill) {
                let data = await this.getData();
                this.apiResponse = {
                    "apiData": data
                };

                this.renderResult = this.renderResult == "ViewBillResult" ? "ViewBillResultSwitch" : "ViewBillResult";
            } else {
                this.renderResult = "EmptyResult";
            }
        },
        async getData() {
            return await digitalBillApi.get("/api/bill_statistics/", {
                params: {
                    tag: this.selectedBill,
                    category_ignore: this.ignorableCaterogies,
                    category_not_in: this.selectedCategories
                }
            }).then(response => response.data).then(data => data)
        }
    },
    provide() {
        return {
            apiResponse: computed(() => this.apiResponse)
        }
    }
})
</script>

<style>

main.mt-auto {
    margin-top: 10% !important;
}

.dynamic-component {
    margin: 2rem 0rem;
}

</style>
