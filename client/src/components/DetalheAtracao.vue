<template>
    <section id="atracao_detalhe" v-bind:class="{ show: ativo }">
        <header class="topo">
			<figure class="bg banner">
				<img src="https://placecage.com/320/150" alt="Teste">
			</figure>
			<button class="voltar" type="button" v-on:click="fechaDetalhe">< Voltar</button>
		</header>
		<div class="conteudo">
			<h2 class="atracao_nome">{{nome}}</h2>
			<p class="nota">Nota: {{notaMedia}}</p>

			<div class="descricao">
				<h3 class="sec-ttl">Descrição</h3>

				<p class="texto">{{descricao}}</p>
			</div>

			<div class="avaliacoes">
				<div class="topo">
					<h3 class="sec-ttl">Avaliações</h3>
					<button type="button" class="avaliar" v-on:click="abreForm">Avaliar</button>
				</div>

				<div class="avaliacoes-slider">
					<div class="avaliacao" v-for="item in avaliacoes">
						<figure class="avaliacao-imgs">
							<img src="https://placecage.com/50/50" alt="teste">
						</figure>

						<div class="conteudo-texto">
							<p class="nome">{{item.nome}}</p>
							<p class="nota">Nota: {{item.nota}}</p>

							<p class="descricao">
								{{item.comentario}}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="container-form" v-bind:class="{ show : showForm }">
				<h3 class="sec-ttl">Avaliar:</h3>
				<form action="" v-on:submit.prevent="salvaAvaliacao" method="post">
					<div class="form-field">
						<label for="nota">Escolha sua nota <strong>{{notaComentario}}</strong></label>
						<input type="range" name="nota" id="nota" step="1" max="5" min="0" v-model="notaComentario">
					</div>
					<div class="form-field">
						<label for="comentario">Comentário</label>
						<textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
					</div>

					<button class="btn btn_vermelho" v-on:click="cancelaComentario" type="button">Cancelar</button>
					<button class="btn" type="submit">Salvar</button>
				</form>
			</div>
		</div>
    </section>
</template>

<script>
import api from "@/utils/integracao";
export default {
	props: {
		nome: String,
		descricao: String,
		avaliacoes: Array,
		ativo: Boolean,
		notaMedia: Number,
		codigo: Number
	},
	data() {
		return {
			isAtivo: this.ativo,
			showForm: false,
			notaComentario: 5
		}
	},
	methods: {
		fechaDetalhe() {
			this.$emit('fechaDetalhe', false);
		},
		abreForm() {
			this.showForm = true;
		},
		cancelaComentario() {
			this.showForm = false;
		},
		salvaAvaliacao(e) {
			let values = {
				cod_atracao: this.codigo,
				cod_cliente: localStorage.getItem('epp_usr_cod'),
				nota: e.target.nota.value,
				comentario: e.target.comentario.value
			};
			api.setHeaders("POST", values);

			let aval = api.salvaAvaliacao();

			aval.then( r => {
				alert("Salvo com sucesso!");
				this.enviaAvaliacao(r);
				this.showForm = false;
			} );
		},
		enviaAvaliacao( value ) {
			this.$emit('enviaAvaliacao', value);
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/detalheAtracao.styl';
</style>

