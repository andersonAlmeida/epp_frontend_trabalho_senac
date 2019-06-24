const integracao = {
	// api: "https://epp2019.herokuapp.com/cms",
	api: "http://localhost:8000/cms",
	token: localStorage.getItem("epp_adm_tk"),
	options: null,

	setHeaders: (method = 'GET', body = null, isLogin = false) => {
		let headers = new Headers();
		headers.append("Content-type", "application/json;charset=UTF-8");

		if(!isLogin) {
			headers.append("Authorization", "Bearer " + integracao.token);
		}

		integracao.options = {
			method: method,
			headers: headers
		};

		if (body) {
			integracao.options.body = JSON.stringify(body);
		}
	},

	connect: (url, headers = {}) => {
		return fetch(url, headers).then(x => {
			// se não é autorizado 
			if( x.status === 401 ) {
				// limpa o token salvo se existir
				localStorage.removeItem('user');
				// redireciona para a página de login
				this.$router.push("/login");
			}
			return x.json()
		}).catch(error => console.log('An error ocurred in your fetch request: ' + error.message));
	},

	// Login
	login: () => {
		return integracao.connect(integracao.api + "/admin/login", integracao.options);
	},

	// Atrações
	getAtracoes: () => {
		return integracao.connect(integracao.api + "/atracao", integracao.options);
	},

	getAtracao: (id) => {
		return integracao.connect(integracao.api + "/atracao/" + id, integracao.options);
	},

	updateAtracao: (id) => {
		return integracao.connect(integracao.api + "/atracao/" + id, integracao.options);
	},

	salvaAtracao: () => {
		return integracao.connect(integracao.api + "/atracao/", integracao.options);
	},

	deletaAtracao: (id) => {
		return integracao.connect(integracao.api + "/atracao/" + id, integracao.options);
	},

	// Categorias
	getCategorias: () => {
		return integracao.connect(integracao.api + "/categoria", integracao.options);
	},

	getCategoria: (id) => {
		return integracao.connect(integracao.api + "/categoria/" + id, integracao.options);
	},

	updateCategoria: (id) => {
		return integracao.connect(integracao.api + "/categoria/" + id, integracao.options);
	},

	salvaCategoria: () => {
		return integracao.connect(integracao.api + "/categoria/", integracao.options);
	},

	deletaCategoria: (id) => {
		return integracao.connect(integracao.api + "/categoria/" + id, integracao.options);
	},

};

module.exports = integracao;