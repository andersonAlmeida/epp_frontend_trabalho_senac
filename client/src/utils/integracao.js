const integracao = {
	api: "https://epp2019.herokuapp.com",
	// api: "http://localhost:8000/cms",
	token: localStorage.getItem("epp_usr_tk"),
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

			switch( x.status ) {
				// se não é autorizado
				case 401:
					// limpa o token salvo se existir
					localStorage.removeItem("epp_usr_tk");
					localStorage.removeItem("epp_usr_name");
					localStorage.removeItem("epp_usr_email");

					// redireciona para a página de login
					window.location = "/login";
				break

				case 400:
					window.location = "/400";
				break;

				case 500:
					window.location = "/500";
				break;
			}

			return x.json()
		}).catch(error => console.log('An error ocurred in your fetch request: ' + error.message));
	},

	// Login
	login: () => {
		return integracao.connect(integracao.api + "/cliente/login", integracao.options);
	},

	// Atrações
	getAtracoes: () => {
		return integracao.connect(integracao.api + "/cms/atracao", integracao.options);
	},

	getAtracao: (id) => {
		return integracao.connect(integracao.api + "/atracao/" + id, integracao.options);
	},

	// Categorias
	getCategorias: () => {
		return integracao.connect(integracao.api + "/categoria", integracao.options);
	},

	getCategoria: (id) => {
		return integracao.connect(integracao.api + "/categoria/" + id, integracao.options);
	}

};

module.exports = integracao;
