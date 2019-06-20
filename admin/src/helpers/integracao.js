const integracao = {
	api: "https://epp2019.herokuapp.com/cms",
	// api: "http://localhost:8000/cms",	    
	token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMyIsIm5vbWUiOiJMaWVnZSJ9.4jUUC433DkickpiPnTWKQLFD8kFv1e5s9Nn9XhngmSM',
	options: null,

	setHeaders: () => {
		let headers = new Headers();
		headers.append("Authorization", "Bearer " + integracao.token);
		headers.append("Content-type", "application/json");

		integracao.options = {
			method: 'GET',
			headers: headers
		};
	},

	getData: (url, headers = {}) => {
		return fetch(url, headers).then(x => x.json()).catch(error => console.log('An error ocurred in your fetch request: ' + error.message));
	},

	getAtracoes: () => {
		return integracao.getData(integracao.api + "/atracao", integracao.options);
	},

	getAtracao: (id) => {
		return integracao.getData(integracao.api + "/atracao/" + id, integracao.options);
	},

	getCategorias: () => {
		return integracao.getData(integracao.api + "/categoria", integracao.options);
	}


};

module.exports = integracao;