<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8">
        <b-card>
          <div slot="header">
            <strong>Nova atração</strong>
          </div>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="nome">Nome</label>
                <b-form-input type="text" id="nome"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group>
                <label for="categoria">Categoria</label>
                <select name="categoria" id="categoria" class="form-control custom-select">
				  <option value="">Selecione</option>
                  <option
                    :value="item.cod_atracao_categoria"
                    :key="item"
                    v-for="item in categorias"
                  >{{item.nome}}</option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <label for="descricao">Descrição</label>
            <b-form-textarea type="text" id="descricao" rows="10"></b-form-textarea>
          </b-form-group>
          <b-form-group>
            <label for="endereco">Endereço</label>
            <b-form-input type="text" id="endereco"></b-form-input>
          </b-form-group>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="inicio">Data de início</label>
                <b-form-input type="date" id="inicio"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="final">Data de encerramento</label>
                <b-form-input type="date" id="final"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="lat">Lat</label>
                <b-form-input type="text" id="lat"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="lng">Lng</label>
                <b-form-input type="text" id="lng"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem" class="form-control">
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-button type="submit" size="sm" variant="primary" v-on:click.prevent="salvaAtracao">
                <i class="fa fa-dot-circle-o"></i> Salvar
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  getAtracoes,
  getData,
  getCategorias,
  setHeaders
} from "../../../helpers/integracao";

export default {
  name: "nova_atracao",
  data() {
    return {
      categorias: null
    };
  },
  created() {
    this.buscaCategorias();
  },
  methods: {
	// pegaParametrosUrl() {
	// 	console.log(this.$router);
	// },
    buscaAtracao() {
      setHeaders();
      let atracoes = getAtracao();

      atracoes.then(res => {
        this.items = res;
      });
    },
    buscaCategorias() {
      setHeaders();
      let cat = getCategorias();

      cat.then(res => {
        this.categorias = res;
      });
    },
    salvaAtracao() {
      console.log("salva a nova atração");
    }
  }
};
</script>
