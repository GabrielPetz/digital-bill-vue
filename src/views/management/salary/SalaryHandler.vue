<template>
  <div>
    <component :is="componentHandler"></component>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, computed } from "vue"
import SalaryList from "@/views/management/salary/SalaryList.vue"
export default defineComponent({
    name: "SalaryHandler",
    components: {
        SalaryList
    },
    methods: {
    },
    setup() {
        const data = reactive({
            componentHandler: ref("SalaryList"),
        });
        return { ...toRefs(data) }
    },
})
</script>

<style>

</style>