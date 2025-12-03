import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/About.vue'),
        },
        {
            path: '/programs',
            name: 'programs',
            component: () => import('@/pages/Programs/Index.vue'),
        },
        {
            path: '/programs/free-schooling',
            name: 'free-schooling',
            component: () => import('@/pages/Programs/FreeSchooling.vue'),
        },
        {
            path: '/programs/e-learning',
            name: 'e-learning',
            component: () => import('@/pages/Programs/ELearning.vue'),
        },
        {
            path: '/programs/scholarships',
            name: 'scholarships',
            component: () => import('@/pages/Programs/Scholarships.vue'),
        },
        {
            path: '/volunteer',
            name: 'volunteer',
            component: () => import('@/pages/Volunteer.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/pages/Contact.vue'),
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/pages/Blog/Index.vue'),
        },
        {
            path: '/blog/:slug',
            name: 'blog-post',
            component: () => import('@/pages/Blog/Show.vue'),
        },
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
