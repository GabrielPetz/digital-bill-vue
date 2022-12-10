<template>
    <div id="view-bill-form" class="row">
        <div class="col-lg-6 col-sm-12">
            <label for="bill">Selecione uma fatura</label>
            <select id="bill" class="form-select" v-model="selectedBill">
                <option v-for="bill in bills" :key="bill.tag" :value="bill.tag">{{ bill.name }}</option>
            </select>
        </div>
        <div class="col-lg-6 col-sm-12">
            <label for="ignore-category">Categorias para ignorar</label>
            <select id="ignore-category" class="form-select" v-model="selectedCategories">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                </option>
            </select>
        </div>
        <div class="d-grid gap-2 col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
            <button type="button" @click="query" class="btn btn-outline-primary">Consultar</button>
        </div>
    </div>

</template>

<script>
import digitalBillApi from "@/services/api";

export default {
    name: 'ViewBillForm',
    components: {},
    data() {
        return {
            bills: null, // this.getBills(),
            categories: null, // this.getCategories(),
            selectedBill: null,
            selectedCategories: null,
        }
    },
    methods: {
        query() {
            console.log("click query")
            this.$emit("getQueryEvent", {
                selectedBill: this.selectedBill,
                selectedCategories: this.selectedCategories,
            })
        },
        async getBills() {
            const response = await digitalBillApi.get('/api/bill/')
                .then(response => this.bills = response.data)
        },
        async getCategories() {
            const response = await digitalBillApi.get('/api/category/')
                .then(response => this.categories = response.data)
        }
    },
    created() {
        this.getBills()
        this.getCategories()
    }
}
</script>

<style>

</style>