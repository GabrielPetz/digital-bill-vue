<template>
    <div>
        <h3 class="float-md-start mb-0">Digital Bill</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
            <NavItemComponent title="Home" url="Main"/>
            <NavItemComponent title="Importar fatura" url="ImportBill"/>
            <NavItemComponent title="Consultar faturas" url="ViewBill"/>
            <NavItemComponent title="Analise de gastos" url="Analytics"/>
        </nav>
    </div>
</template>

<script>
import NavItemComponent from "./NavItem.vue"
export default {
    name: 'HeaderComponent',
    components: {
        NavItemComponent,
    },
}
</script>

<style scoped>
h3 {
    user-select: none;
}
</style>