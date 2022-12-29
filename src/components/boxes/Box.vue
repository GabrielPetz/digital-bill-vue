<template>
    <div v-bind:data-view=url class="round-border box bg-dark text-white" @click="onClick">
        <div class="title">
            <i v-bind:class="icon"></i>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxComponent',
    props: {
        title: String,
        icon: String,
        url: String,
    },
    methods: {
        onClick(e) {
            let viewHandler = e.target.getAttribute("data-view")
            this.$router.push({name: viewHandler})
        }
    }
}
</script>

<style scoped>
.box {
    display: flex;
    justify-content: center;
    position: relative;

    margin-left: .75em;
    margin-right: .75em;
    cursor: pointer;

    width: -webkit-fill-available;
    height: -webkit-fill-available;
    text-align: center;
    justify-content: center;

    overflow: hidden;
    user-select: none;
}

.box div {
    margin-top: .5rem;
    margin-bottom: .5rem;
}

.box::before {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    transition: height .5s;
}

.box:hover::before {
    height: 100%;
    background: white;
    border-radius: var(--radius);
}

.box:hover::before {
    mix-blend-mode: difference;
}

div.title i {
    font-size: 4rem;
}
</style>