const integracao = {
    // api: "https://epp2019.herokuapp.com/cms",	
    api: "http://localhost:8000/cms",	

	getData: (url, headers = {}) => {
		return fetch(url, headers).then( x => x.json()).catch( error => console.log( 'An error ocurred in your fetch request: ' + error.message ) );
	},

	getAtracoes: (headers) => {
        headers = new Headers();
        headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMyIsIm5vbWUiOiJMaWVnZSJ9.4jUUC433DkickpiPnTWKQLFD8kFv1e5s9Nn9XhngmSM");
        let options = { method: 'GET',
                        headers: headers
                    };
		return integracao.getData( integracao.api + "/atracao", options );		
	}
};

module.exports = integracao;