<template>
    <div id="goal-list" class="round-border default-margin category-bars">
        <div class="bar-handler" v-for="goal in goals" :key="goal.category.tag">
            <div class="category-info">
                <div>
                    <span>{{ goal.category.name }}</span>
                </div>
                <div>
                    <span class="badge bg-secondary">{{ formatCurrency(goal.total) }} / {{ formatCurrency(goal.goal) }} </span>
                </div>
            </div>

            <div class="progress" role="progressbar">
                <div class="progress-bar" 
                :class="{'bg-danger': isAlertLevel(goal.total, goal.goal)}"
                :style="{ 'width': getGoalSliderValue(goal.total, goal.goal) + '%' }"></div>
            </div>
        </div>
    </div>

</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import Formatter from "@/services/formatters"

export default defineComponent({
    name: "GoalBarComponent",
    inject: ['billData'],
    methods: {
        getGoalSliderValue(value, goal) {
            let percentage = value / goal;
            percentage = percentage * 100;
            return percentage;
        },
        formatCurrency(value) {
            return Formatter.currencyFormat(value);
        },
        isAlertLevel(value, goal){
            return value > goal ? true : false;
        },
    },
    setup() {
        const data = reactive({
            goals: ref(Array),
        });
        return { ...toRefs(data) }
    },
    mounted() {
        let expenses = this.billData.value.expenses;
        let categoryGoals = expenses.expenses_by_category;
        this.goals = categoryGoals.filter(x => x.there_is_goal)
        
    }
})
</script>

<style scoped>
#goal-list {
    padding: .5rem 0rem;
}

.category-bars .bar-handler {
    padding: 0.5rem 1rem;
}

.category-info {
    display: flex;
    justify-content: space-between;
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
    margin-top: .5rem;
}
</style>