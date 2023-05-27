<template>
    <div>
        <div class="row">
            <div class="col-8"></div>
            <div class="col-4 justify-content-end">
                <button type="button" class="btn btn-outline-primary" @click="defineAction('create')"><i
                        class="bi bi-plus"></i></button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table text-white">
                    <thead>
                        <th>Nome</th>
                        <th>Desde</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="salary in salaries" :key="salary.tag">
                            <td>{{ salary.name }}</td>
                            <td>{{ salary.since }}</td>
                            <td>{{ formatValue(salary.value) }}</td>
                            <td class="buttons">
                                <button type="button" class="btn btn-outline-primary"
                                    @click="defineAction('view', salary.tag)"><i class="bi bi-eye"></i></button>
                                <button type="button" class="btn btn-outline-info"
                                    @click="defineAction('edit', salary.tag)"><i class="bi bi-pencil"></i></button>
                                <button type="button" class="btn btn-outline-danger"
                                    @click="defineAction('delete', salary.tag)"><i class="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <component :is="modalAction"></component>
        </div>
    </div>

</template>

<script>
import { defineComponent, reactive, ref, toRefs, provide } from "vue";
import digitalBillApi from "@/services/api";
import Formatter from "@/services/formatters"
// import EditComponent from "@/views/management/salary/actions/EditComponent.vue"
// import DeleteComponent from "@/views/management/salary/actions/DeleteComponent.vue"
// import CreateComponent from "@/views/management/salary/actions/CreateComponent.vue"
// import ViewComponent from "@/views/management/salary/actions/ViewComponent.vue"

import FormComponent from "@/views/management/salary/actions/FormComponent.vue"
import FormComponentSwitch from "@/views/management/salary/actions/FormComponent.vue"

const SELECTED_SALARY = ref(null);
const SELECTED_ACTION = ref(null);

provide('selectedSalary', SELECTED_SALARY)
provide('selectedAction', SELECTED_ACTION)

export default defineComponent({
    name: "SalaryList",
    components: {
        // EditComponent, DeleteComponent, CreateComponent, ViewComponent,
        FormComponent
    },
    setup() {
        const data = reactive({
            salaries: ref([]),
            modalAction: ref(null),
            selectedSalary: ref(null)
        });

        return { ...toRefs(data) }
    },
    mounted() {
        let response = this.getSalary();
        response.then(data => this.salaries = data)
    },
    methods: {
        // CRUD functions
        defineAction(action, identifier = null) {
            console.log(action, identifier);

            this.modalAction = "FormComponent";
            SELECTED_SALARY.value = this.salaries.filter(x => x.tag == identifier);
            SELECTED_ACTION.value = action;

            console.log(SELECTED_SALARY, SELECTED_ACTION);

            provide('selectedSalary', SELECTED_SALARY);
            provide('selectedAction', SELECTED_ACTION);

        },
        // LIST functions
        async getSalary() {
            return await digitalBillApi.get("/api/salary/")
                .then(response => response.data)
                .then(data => data)
        },
        formatValue(value) {
            return Formatter.currencyFormat(value);
        }
    },
})
</script>

<style scoped>
.buttons button {
    margin: 0rem 0.2rem;
}
</style>