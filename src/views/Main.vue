<template>
    <div class="container box-list ">
        <Box title="Importar fatura" icon="bi bi-box-arrow-in-up" url="ImportBill" />
        <Box title="Consultar faturas" icon="bi bi-search" url="ViewBill" />
        <Box title="Analise de faturas" icon="bi bi-bar-chart-line" url="Analytics" />
    </div>
</template>

<script>
import Box from '../components/boxes/Box'
export default {
    name: 'MainComponent',
    components: {
        Box,
    },
}
</script>

<style scoped>
.box-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
</style>