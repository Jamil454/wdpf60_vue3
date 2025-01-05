import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FoodItems from '@/components/FoodItems.vue'
import FruitPage from '@/views/FruitPage.vue'
import TodoList from '@/views/TodoList.vue'
import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import Forminputs from '@/views/Forminputs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodItems,
    },
    {
      path: '/fruit',
      name: 'fruit',
      component: FruitPage,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefPage,
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle,
    },
    {
      path: '/form',
      name: 'form',
      component: Forminputs,
    },
    


  ],
})

export default router
