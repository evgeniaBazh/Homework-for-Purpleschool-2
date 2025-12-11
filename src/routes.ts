import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    { path: '/', component: () => import('./views/IndexView.vue') },
    { path: '/main', component: () => import('./views/MainView.vue') },
    { path: '/statistics', component: () => import('./views/StatisticsView.vue') },
  ],
  history: createWebHistory(),
})
