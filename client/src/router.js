import Vue from 'vue';
import Router from 'vue-router';

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');
const Login = () => import('@/views/Login');

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: DefaultContainer,
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
		}
	],
});
