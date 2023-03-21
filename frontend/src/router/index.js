import {createRouter,createWebHistory} from 'vue-router';

const routes=[
    {
        path:'/',
        name:'home',
        component:()=>import('../views/HomeView.vue')
    },
    {
        path:'/marcas',
        name:'trademarks',
        component:()=>import('../views/TrademarkView.vue')
    },
    {
        path:'/referencias',
        name:'equipment-reference',
        component:()=>import('../views/EquipmentReferenceView.vue')
    },
    {
        path:'/empleados',
        name:'employees',
        component:()=>import('../views/EmployeesView.vue')
    },
    {
        path:'/equipos',
        name:'equipment',
        component:()=>import('../views/EquipmentView.vue')
    },
    {
        path:'/asignaciones',
        name:'assign',
        component:()=>import('../views/AssignEquipmentView.vue')
    }
]
const router = createRouter({
    linkActiveClass:'active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;