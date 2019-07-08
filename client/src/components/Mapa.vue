<template>
  <div id="mapa"></div>
</template>

<script>
import api from "@/utils/integracao";
import L from 'leaflet';

export default {
	name: 'Mapa',
	data() {
		return {
			token: 'pk.eyJ1IjoiYW5kZXJzb25yYWxtZWlkYSIsImEiOiJjanh0aWVmOXUwdXJ3M2hwcDkzYzdqdWNnIn0.w1Zn3I4oso8a-Ze32tShyg',
			user_location: null,
			atracoes: null,
			mapa: null
		}
	},
	created() {
		this.buscaAtracoes();
		this.pegaLocalizacaoUsuario();
	},
	mounted() {
		// console.log( this.user_location );

		let tm = setInterval(  () => {
			if( typeof this.user_location === 'object' ) {
				this.iniciaMapa( this.user_location );
				clearInterval(tm);
			}
		}, 100);
	},
	methods: {
		buscaAtracoes() {
			api.setHeaders();
			let atracoes = api.getAtracoes();

			atracoes.then(res => {
				this.atracoes = res;

				this.adicionaMarcadores();
			});
		},

		iniciaMapa( loc ) {
			this.mapa = L.map('mapa').setView([loc.latitude, loc.longitude], 16);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: false,
				maxZoom: 30,
				id: 'mapbox.streets',
				accessToken: this.token
			}).addTo( this.mapa );

			let circle = L.circle([loc.latitude, loc.longitude], {
				color: 'red',
				fillColor: '#f03',
				fillOpacity: 0.5,
				radius: 50
			}).addTo( this.mapa );
		},

		adicionaMarcadores() {
			this.atracoes.forEach( item => {
			// let len = this.atracoes.length;

			// for(let i=0; i < len; i++){
			// 	let item = this.atracoes[i];
				let marker = L.marker([item.lat, item.lng], {
					title: item.nome,
				}).addTo( this.mapa );

				marker.extraData = item;

				marker.bindTooltip(`<strong>${item.nome}</strong><br><p>${item.descricao}</p>`);

				marker.on('click', function(e) {
					console.log("esse é o marcador: ", e.sourceTarget.extraData);
				});
			});

		},

		pegaLocalizacaoUsuario() {
			navigator.geolocation.getCurrentPosition( (position) => {
				// console.log( position.coords );
				this.user_location = position.coords;
			});
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~leaflet/dist/leaflet.css';
@import '../assets/stylus/mapa.styl';
</style>
