<template>
    <router-link :to="{name: url}" class="nav-link fw-bold py-1 px-0" aria-current="page">{{ title }}</router-link>
</template>

<script>
export default {
    name: 'NavItemComponent',
    props: {
        title: String,
        url: String,
    },
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>