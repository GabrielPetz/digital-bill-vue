<template>
    <div class="row">
        <div class="col-lg-6 col-md-12 mb-3">
            <label for="month" class="form-label">Selecione um mês para consultar</label>
            <input type="month" class="form-control" v-model="month" id="month">
        </div>
        <div class="d-grid gap-2 col-lg-6 col-md-12 mx-auto mt-4">
            <button type="button" @click="query" class="btn btn-outline-primary">Consultar</button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, ref } from '@vue/reactivity';

export default {
    name: "AnalytictsBillView",
    components: {},
    setup() {
        const data = reactive({
            month: ref("2022-12")
        })
        return { ...toRefs(data) }
    },
    methods: {
        query() {
            // TODO: Realizar a consulta de todas as despesas por periodo e exibir as informação de forma semelhante a tela de consulta por fatura.
            let [year, month] = this.month.split('-');
            let thisMonth = new Date(year, month, 0);

            let startDate = `${this.month}-01T00:00-03:00`
            let endDate = `${this.month}-${thisMonth.getDate()}T00:00-03:00`
            console.log({
                'startDate': startDate,
                'endDate': endDate
            })
            return {
                'startDate': startDate,
                'endDate': endDate
            }
        },
    },
}
</script>

<style>
@import "vue-select/dist/vue-select.css";
</style>