import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const Atracoes = () => import('@/views/pages/atracoes/Listar')
const Categorias = () => import('@/views/pages/categorias/Listar')
const NovaAtracao = () => import('@/views/pages/atracoes/Novo')
const EditarAtracao = () => import('@/views/pages/atracoes/Editar')
const NovaCategoria = () => import('@/views/pages/categorias/Novo')
const EditarCategoria = () => import('@/views/pages/categorias/Editar')

// Users
// const Users = () => import('@/views/users/Users')
// const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/atracoes'
    },
    {
      path: 'atracoes',
      name: 'Atrações',
      component: DefaultContainer,
      children:[
        {
          path: '/atracoes',
          name: 'listar',
          component: Atracoes
        },
        {
          path: '/atracoes/novo',
          name: 'Nova atração',
          component: NovaAtracao
        },
        {
          path: '/atracoes/:id',
          name: 'Editar atração',
          component: EditarAtracao
        },
      ]
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: DefaultContainer,
      children: [
        {
          path: '/categorias',
          name: 'Lista categorias',
          component: Categorias
        },
        {
          path: '/categorias/novo',
          name: 'Nova Categoria',
          component: NovaCategoria
        },
        {
          path: '/categorias/:id',
          name: 'Editar categoria',
          component: EditarCategoria
        },
      ]
    },
    {
      path: '/login',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
});


