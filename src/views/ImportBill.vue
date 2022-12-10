<template>
    <form>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <label for="account">Selecione uma conta para importar</label>
                <select id="account" v-model="account" class="form-select" required>
                    <option id="1" value="1">1</option>
                    <option id="2" value="2">2</option>
                    <option id="3" value="3">3</option>
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
    </form>
</template>

<script>
export default {
    name: 'ImportBillView',
    methods: {
        async uploadBill() {
            let url = "http://127.0.0.1:8001/bill/import/";

            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'multipart/form-data', // 'application/json', 'application/x-www-form-urlencoded'
                },
                body: {
                    bill: this.files,
                    account: this.account
                }
            })
            console.log(response)
        },
        addFiles() {
            this.files = this.$refs.file.files;
        }

    },
    data: () => {
        return {
            account: String(),
            files: null,
        }
    }
}
</script>

<style scoped>

</style>

<style>
main.mt-auto {
    margin-top: 10% !important;
}
</style>
