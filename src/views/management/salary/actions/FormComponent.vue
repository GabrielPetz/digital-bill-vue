<template>
    <div>
        <p>EDIT</p>
        <span>Selected Salary: {{ selectedSalary }}</span>
        <br/>
        <span>Selected Action: {{ selectedAction }}</span>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, inject } from "vue";

export default defineComponent({
    name: "SalaryForm",
    setup() {
        const data = reactive({
            selectedSalary: inject('selectedSalary'),
            selectedAction: inject('selectedAction'),
        });


        console.log(inject('selectedSalary'))
        console.log(inject('selectedAction'))

        return { ...toRefs(data) }
    },
})
</script>

<style>

</style>