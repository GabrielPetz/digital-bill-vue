<template>
    <div class="round-border">
        <div class="col" id="bar-chart-history"></div>
    </div>
</template>

<script>
import Extractor from "@/services/extractors"
import { defineComponent, reactive, ref, toRefs } from "vue"
import { mountBarChart } from "@/utils/HighChartsBuilder"
export default defineComponent({
    name: "HistoryChartComponent",
    inject: ['billData'],
    components: {},
    mounted() {
        let extractor = new Extractor(this.billData.value);
        let data = extractor.extractDataToHighchartsFormat("daily");
        mountBarChart("bar-chart-history", data)
    },
});
</script>

<style scoped>
#bar-chart-history {
    margin: 1rem 1rem;
}
</style>