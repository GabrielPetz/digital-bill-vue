import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/Main.vue'
import ImportBill from '../views/ImportBill.vue'
import ViewBill from '../views/ViewBill.vue'
import AnalytictsBill from '../views/AnalytictsBill.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/import',
        name: 'ImportBill',
        component: ImportBill,
    },
    {
        path: '/view',
        name: 'ViewBill',
        component: ViewBill,
    },
    {
        path: '/analytics',
        name: 'Analytics',
        component: AnalytictsBill,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router