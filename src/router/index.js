import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/order_steps/FirstStepView.vue'),
        meta: {
          activeStep: 1,
        }
      },
      {
        path: 'second-step',
        component: () => import('@/views/order_steps/SecondStepView.vue'),
        meta: {
          activeStep: 2,
        }
      },
      {
        path: 'third-step',
        component: () => import('@/views/order_steps/ThirdStepView.vue'),
        meta: {
          activeStep: 3,
        }
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
