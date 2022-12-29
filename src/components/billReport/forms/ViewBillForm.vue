<template>
    <div id="view-bill-form" class="row">
        <div class="col-lg-5 col-sm-12">
            <label for="bill">Selecione uma fatura</label>
            <select id="bill" class="form-select" v-model="selectedBill">
                <option v-for="bill in bills" :key="bill.tag" :value="bill.tag">{{ bill.name }}</option>
            </select>
        </div>
        <div class="col-lg-5 col-sm-12">
            <label for="ignore-category">Categorias para ignorar</label>
            <select id="ignore-category" class="form-select" v-model="selectedCategories" multiple>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                </option>
            </select>
        </div>
        <div class="col-lg-2 col-sm-12 form-check">
            <input id="ignorable-categories" class="form-check-input" type="checkbox" v-model="ignorableCaterogies"
                :value="ignorableCaterogies">
            <label for="ignorable-categories" class="form-check-label">Ignorar categorias padrões?</label>
        </div>
        <div class="d-grid gap-2 col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
            <button type="button" @click="query" class="btn btn-outline-primary">Consultar</button>
        </div>
    </div>

</template>

<script>
import digitalBillApi from "@/services/api";
import Extractor from '@/services/extractors.js';

export default {
    name: 'ViewBillForm',
    components: {},
    data() {
        return {
            bills: null, // this.getBills(),
            categories: null, // this.getCategories(),
            selectedBill: new Array(),
            selectedCategories: new Array(),
            ignorableCaterogies: true,
        }
    },
    methods: {
        query() {
            this.$emit("getQueryEvent", {
                selectedBill: this.selectedBill,
                selectedCategories: this.selectedCategories,
                ignorableCaterogies: this.ignorableCaterogies
            })
        },
        async getBills() {
            const response = await digitalBillApi.get('/api/bill/')
                .then(response => this.bills = response.data);
            // this.bills = Extractor.extractDataToSelectFormat(this.bills, 'tag', 'name')
        },
        async getCategories() {
            const response = await digitalBillApi.get('/api/category/')
                .then(response => this.categories = response.data)
            // this.categories = Extractor.extractDataToSelectFormat(this.categories, 'tag', 'name')
        }
    },
    created() {
        this.getBills()
        this.getCategories()
    }
}
</script>

<style scoped>
.form-check {
    text-align: start;
    padding: 1.8rem;
}
</style>