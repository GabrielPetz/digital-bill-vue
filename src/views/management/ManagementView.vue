<template>
  <div class="row">
    <div class="col-lg-4 col-md-12">
        <Box title="Metas" icon="bi bi-tag" url="Management" />
    </div>
    <div class="col-lg-4 col-md-12">
        <Box title="Receita" icon="bi bi-cash-stack" url="Salary" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import Formatter from "@/services/formatters"
import Box from '@/components/boxes/Box'

export default defineComponent({
    name: "ManagementView",
    components: {
        Box
    },
    methods: {
    },
    setup() {
        const data = reactive({
        });
        return { ...toRefs(data) }
    },
})
</script>

<style>

</style>