import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/tabbar/home/Home')
const Category = () => import('../views/tabbar/category/Category')
const Profile = () => import('../views/tabbar/profile/Profile')
const ShopCart = () => import('../views/tabbar/shopcart/ShopCart')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
