import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const Atracoes = () => import('@/views/pages/atracoes/Listar')
const Categorias = () => import('@/views/pages/categorias/Listar')
const NovaAtracao = () => import('@/views/pages/atracoes/Novo')
const NovaCategoria = () => import('@/views/pages/categorias/Novo')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/atracoes',
      name: 'Home',
      // component: DefaultContainer,
      // children: [
      //   {
      //     path: '/',
      //     name: 'Dashboard',
      //     component: Dashboard
      //   }
      // ]
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
          path: '/atracoes/:id',
          name: 'Editar atração',
          component: NovaAtracao
        },
        {
          path: '/atracoes/novo',
          name: 'Nova atração',
          component: NovaAtracao
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
        }
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


