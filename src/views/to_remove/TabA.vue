<template>
  <span>Tab A {{ now }}</span>
</template>
  
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { inject } from "vue";

export default {
  name: "TabA",
  props: {
    now: Date
  },
  setup(props, { slots }) {
  
  },
  beforeUnmount() {
    // prevent memory leak
    // clearInterval(this.interval)
  },
  created() {
    // this.interval = setInterval(() => {
    //   // Concise way to format time according to system locale.
    //   // In my case this returns "3:48:00 am"

    // }, 10)

    // this.now = new Date(); // Intl.DateTimeFormat(navigator.language, {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    //   }).format()
  }
}
</script>
  
<style>

</style>