<template>
  <main id="main-container">
    <Mapa v-on:enviaMarcador="childMarkerClick" />
    <DetalheAtracao v-on:fechaDetalhe="fechaDetalhe" v-on:enviaAvaliacao="adicionaAvaliacao" :codigo="cod_atracao" :nome="nome" :descricao="descricao" :avaliacoes="avaliacoes" :notaMedia="notaMedia" :ativo="ativo" />
	<button type="button" class="sair" v-on:click="sair">Logout</button>
	<p class="info-usuario">
		Olá {{usuario.nome}} <br>
		Pontos: {{usuario.pontos}}
	</p>
  </main>
</template>

<style lang="stylus">
	@import 'nib'

	*
		box-sizing border-box
	#app
		overflow hidden
	.sair
		position fixed
		z-index 9998
		top 10px
		right 10px
		font-weight 700
		font-size 3.625vw

	.info-usuario
		position fixed
		z-index 9998
		bottom 10px
		left 10px
		font-weight 700
		font-size 3.625vw
		background #fff
		padding 10px
		border-radius 3px
</style>


<script>
import Mapa from '@/components/Mapa.vue';
import DetalheAtracao from '@/components/DetalheAtracao.vue';
import api from "@/utils/integracao";

export default {
	name: 'DefaultContainer',
	created() {
		this.buscaDadosCliente();
	},
	data() {
		return {
			nome: '',
			notaMedia: 5,
			descricao: '',
			avaliacoes: [],
			ativo: false,
			cod_atracao: 0,
			usuario: {
				nome: localStorage.getItem('epp_usr_name'),
				email: '',
				pontos: 0
			}
		}
	},
	components: {
		Mapa,
		DetalheAtracao
	},
	methods: {
		childMarkerClick( value ) {
			this.cod_atracao = value.sourceTarget.extraData.cod_atracao;
			this.nome = value.sourceTarget.extraData.nome;
			this.descricao = value.sourceTarget.extraData.descricao;
			this.avaliacoes = value.sourceTarget.extraData.avaliacoes;
			this.ativo = true;
			let nota = Object.values(value.sourceTarget.extraData.avaliacoes).reduce( (acc, curr) => {
				return acc.nota + curr.nota;
			} );
			this.notaMedia = typeof nota === "number" ? (nota / value.sourceTarget.extraData.avaliacoes.length) : (nota.nota / value.sourceTarget.extraData.avaliacoes.length);
		},
		buscaDadosCliente() {
			api.setHeaders();

			let dados = api.getCliente( localStorage.getItem('epp_usr_cod') );

			dados.then( r => {
				this.usuario.pontos = r.pontuacao;
			} );
		},
		adicionaAvaliacao( value ) {
			this.avaliacoes.push( value );
			this.buscaDadosCliente();
		},
		fechaDetalhe( value ) {
			this.ativo = false;
		},
		sair() {
			localStorage.removeItem("epp_usr_tk");
            localStorage.removeItem("epp_usr_name");
            localStorage.removeItem("epp_usr_email");
			localStorage.removeItem("epp_usr_cod");

			setTimeout( () => {
				this.$router.push("/login");
			}, 500 );
		}
	}
};
</script>
