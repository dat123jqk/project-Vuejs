import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import shop from '@/components/pages/shop'
import blog from '@/components/pages/blog'
import contact from '@/components/pages/contact'
import shopingcart from '@/components/pages/shopingcart'
import checkOut from '@/components/pages/checkOut'
import blogDetail from '@/components/pages/blogDetail'
import productList from '@/components/pages/productlist'
import productForm from '@/components/pages/productForm'
import register from '@/components/data/register'
import login from '@/components/data/login'
import dashboard from '@/components/data/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/shopingcart',
      name: 'shopingcart',
      component: shopingcart
    },
    {
      path: '/checkOut',
      name: 'checkOut',
      component: checkOut
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/productList',
      name: productList,
      component: productList
    },
    {
      path: '/productForm',
      name: productForm,
      component: productForm
    },
    {
      path: '/register',
      name: register,
      component: register 
    },
    {
      path: '/login',
      name: login,
      component: login
    },
    {
      path: '/dashboard',
      nam: dashboard,
      components: dashboard
    }
  ]
})
