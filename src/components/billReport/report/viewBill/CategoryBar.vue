<template>
    <div class="round-border default-margin category-bars">
        <div class="bar-handler" v-for="categoryTotal in categories" :key="categoryTotal.category.tag">
            <div class="category-info">
                <div class="text-left">
                    <span class="category-position">{{ categoryTotal.index }}&#186; </span>
                    <span>{{ categoryTotal.category.name }}</span>
                </div>
                <div class="text-right">
                    <span class="badge bg-secondary">{{ formatCurrency(categoryTotal.total) }}</span> /
                    <span class="badge bg-secondary">{{ formatCurrency(totalValueOfExpenses) }}</span>
                </div>
            </div>

            <div class="progress" role="progressbar" aria-label="Default example" aria-valuemin="0" aria-valuemax="100"
                :aria-valuenow="getSliderValue(categoryTotal.total)">
                <div class="progress-bar" :style="{ 'width': getSliderValue(categoryTotal.total) + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import Formatter from "@/services/formatters"

export default defineComponent({
    name: "CategoryBarComponent",
    inject: ['billData'],
    methods: {
        getSliderValue(value) {
            let percentage = value / this.totalValueOfExpenses
            percentage = percentage * 100;
            return Formatter.integerFormat(percentage)
        },
        formatCurrency(value) {
            return Formatter.currencyFormat(value)
        }
    },
    setup() {
        const data = reactive({
            categories: ref(Array),
            totalValueOfExpenses: ref(null)
        });
        return { ...toRefs(data) }
    },
    mounted() {
        let expenses = this.billData.value.expenses;
        this.categories = expenses.expenses_by_category;
        this.totalValueOfExpenses = expenses.statistics.total;
    }
})
</script>

<style scoped>

.text-left {
    text-align: left;
}

.text-right {
    text-align: left; 
}

.category-bars .bar-handler {
    padding: 0.5rem 1rem;
}

.category-info {
    /* display: flex;
    justify-content: space-between; */
    margin: 0.5rem 0rem;
}

.category-position {
    font-size: smaller;
}

.progress-bar p {
    text-align: center;
}

.progress {
    --bs-progress-height: 1.5rem;
    --bs-progress-font-size: .8rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.5rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #0d6efd;
    --bs-progress-bar-transition: width 0.6s ease;
    display: flex;
    height: var(--bs-progress-height);
    overflow: hidden;
    font-size: var(--bs-progress-font-size);
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
}
</style>