<template>
    <div class="container-fluid row box-list">
        <div class="col-lg-4 col-md-12 box-item">
            <Box title="Importar fatura" icon="bi bi-box-arrow-in-up" url="ImportBill" />
        </div>
        <div class="col-lg-4 col-md-12 box-item">
            <Box title="Consultar faturas" icon="bi bi-search" url="ViewBill" />
        </div>
        <div class="col-lg-4 col-md-12 box-item">
            <Box title="Analise de faturas" icon="bi bi-bar-chart-line" url="Analytics" />
        </div>
    </div>
</template>

<script>
import Box from '@/components/boxes/Box'
export default {
    name: 'MainComponent',
    components: {
        Box,
    },
}
</script>

<style scoped>
.box-item {
    margin: .5rem 0rem !important;
}
</style>