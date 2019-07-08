import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// verifica se o usuário está logado senão direciona para a página de login
router.beforeEach((to, from, next) => {
	const publicPages = ['/login', '/register'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('epp_usr_tk');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
