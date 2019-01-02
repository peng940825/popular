import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login'

import Admin from '@/components/Admin'
import Products from '@/pages/Products'
import Coupons from '@/pages/Coupons'
import Orders from '@/pages/Orders'

import Home from '@/components/Home'
import HomeNews from '@/components/HomeNews'
import Music from '@/components/Music'
import MusicList from '@/pages/MusicList'
import jaychou from '@/pages/jaychou'
import taeyeon from '@/pages/taeyeon'
import gdragon from '@/pages/gdragon'
import atc from '@/pages/atc'
import oneokrock from '@/pages/oneokrock'
import Tour from '@/pages/Tour'

import ShoppingCart from '@/pages/ShoppingCart'
import Checkout from '@/pages/Checkout'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          name: 'Products',
          path: 'products',
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          name: 'Coupons',
          path: 'coupons',
          component: Coupons,
          meta: { requiresAuth: true }
        },
        {
          name: 'Orders',
          path: 'orders',
          component: Orders,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      name: '',
      path: '/',
      component: Home,
      children: [
        {
          name: 'HomeNews',
          path: '',
          component: HomeNews
        },
        {
          name: 'Tour',
          path: 'tour',
          component: Tour
        },
        {
          name: '',
          path: 'music',
          component: Music,
          children: [
            {
              name: 'MusicList',
              path: '',
              component: MusicList
            },
            {
              name: 'jaychou',
              path: 'jaychou',
              component: jaychou
            },
            {
              name: 'taeyeon',
              path: 'taeyeon',
              component: taeyeon
            },
            {
              name: 'gdragon',
              path: 'gdragon',
              component: gdragon
            },
            {
              name: 'atc',
              path: 'atc',
              component: atc
            },
            {
              name: 'oneokrock',
              path: 'oneokrock',
              component: oneokrock
            },
            {
              name: 'ShoppingCart',
              path: 'shoppingcart',
              component: ShoppingCart
            },
            {
              name: 'Checkout',
              path: 'checkout/:orderId',
              component: Checkout
            }
          ]
        }
      ]
    }
  ]
})
