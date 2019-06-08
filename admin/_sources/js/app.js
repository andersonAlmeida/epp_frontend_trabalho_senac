import home from './components/home';
import categorias from './components/home';
import atracao from './components/atracao';
import atracoes from './components/atracoes';
import atracoesNovo from './components/atracaoForm';
import erro from './components/erro';

var routes = [
    { path: '/', component: home },
    { path: '/atracoes/:id', component: atracao },
    { path: '/atracoes', component: atracoes },
    { path: '/atracoes/novo', component: atracoesNovo },
    { path: '/atracoes/categorias', component: categorias },
    { path: '*', component: erro }
]

var router = new VueRouter({
    routes
})

var app = new Vue({
    el: '#app',
    router
})