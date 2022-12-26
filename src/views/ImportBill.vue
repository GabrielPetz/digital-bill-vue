<template>
    <form>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <label for="account">Selecione uma conta para importar</label>
                <select id="account" v-model="account" class="form-select" required>
                    <option v-for="account in bankAccount" :key="account.id" :value="account.tag" >{{account.name}} ({{ account.branch }} {{account.account}})</option>
                </select>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <label for="files">Selecione uma ou mais faturas para importar</label>
                <input type="file" @change="addFiles" ref="file" class="form-control" id="files" multiple required>
            </div>
            <div class="d-grid gap-2 col-lg-4 col-md-12 col-sm-12 mx-auto mt-4">
                <button type="button" @click="uploadBill" class="btn btn-outline-primary">Importar</button>
            </div>
        </div>
        <p>{{ account }}</p>
        <div>
            <p v-for="file in files" :key="file">{{ file.name }}</p>
        </div>
    </form>
</template>

<script>

import digitalBillApi from "@/services/api";
import { defineComponent, reactive, ref, toRefs, provide, computed, onMounted } from "vue"

export default defineComponent({
    name: 'ImportBillView',
    methods: {
        async getBankAccount() {
            this.bankAccount = new Array();
            return await digitalBillApi.get("/api/bank_account/").then(response => this.bankAccount = this.bankAccount.concat(response.data))
        },
        async uploadBill() {
            let url = "http://127.0.0.1:8001/bill/import/";

            // const response = await fetch(url, {
            //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //     mode: 'no-cors', // no-cors, *cors, same-origin
            //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //     credentials: 'same-origin', // include, *same-origin, omit
            //     headers: {
            //         'Content-Type': 'multipart/form-data', // 'application/json', 'application/x-www-form-urlencoded'
            //     },
            //     body: {
            //         bill: this.files,
            //         account: this.account
            //     }
            // });
            // console.log(response)
        },
        addFiles() {
            this.files = this.$refs.file.files;
        }
    },
    setup() {
        const data = reactive({
            account: ref(""),
            files: ref(null),
            bankAccount: Array,
        });
        return { ...toRefs(data) }
    },
    async created() {
        await this.getBankAccount();
        console.log(this.bankAccount.forEach((a)=> {console.log(a)}));
    }
})
</script>

<style scoped>

</style>

<style>
main.mt-auto {
    margin-top: 10% !important;
}
</style>
