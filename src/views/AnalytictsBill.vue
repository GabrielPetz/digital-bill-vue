<template>
    <div>
        <button @click="activeTabF('TabA')">Tab A</button>
        <button @click="activeTabF('TabB')">Tab B</button>
        <button @click="activeTabF('TabC')">Tab C</button>
        <br>
        <component :is="activeTab" :if="renderComponent" :now="now"></component>
    </div>

</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { provide } from "vue";
import TabA from "./to_remove/TabA.vue"
import TabB from "./to_remove/TabB.vue"
import TabC from "./to_remove/TabC.vue"

export default {
    name: "AnalytictsBillView",
    components: {
        TabA,
        TabB,
        TabC
    },
    methods: {
        activeTabF(tab) {
            this.activeTab = tab;
        },
    },
    setup() {
        const data = reactive({
            activeTab: "TabA",
            renderComponent: true,
            now: new Date(),
        })
        return { ...toRefs(data) }
    }

}
</script>

<style>

</style>