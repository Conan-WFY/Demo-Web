import Vue from 'vue'
import vueRouter from 'vue-router'


// 热加载引入子组件
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

//1.安装插件
Vue.use(vueRouter)

//2.创建路由对象映射
const routes = [
  { // 初始值
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new vueRouter({
  routes,
  mode: 'history',
})

//3. 导出路由插件
export default router
