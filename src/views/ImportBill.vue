<template>
    <form>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <label for="account">Selecione uma conta para importar</label>
                <select id="account" v-model="account" class="form-select" required>
                    <option v-for="account in bankAccount" :key="account.id" :value="account.tag">{{ account.name }} ({{
        account.branch
}} {{ account.account }})</option>
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

            const toUploadFiles = new FormData();
            
            console.log(this.files)
            this.files.forEach((e, i) => {
                console.log(e)
            })
            
            toUploadFiles.append("files", 'files', this.files )
            toUploadFiles.append("account", this.account)
            console.log(this.account)
            const response = await digitalBillApi.post("/import/", toUploadFiles, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
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
