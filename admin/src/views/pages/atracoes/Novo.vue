<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8">
        <b-card>
          <form action @submit.prevent="salvaAtracao" method="post" enctype="multipart/form-data">
            <div slot="header">
              <strong>Nova atração</strong>
            </div>
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <label for="nome">Nome</label>
                  <b-form-input type="text" id="nome" name="nome" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group>
                  <label for="categoria">Categoria</label>
                  <select
                    name="cod_atracao_categoria"
                    id="categoria"
                    class="form-control custom-select"
                    required
                  >
                    <option value>Selecione</option>
                    <option
                      v-for="item in categorias"
                      :value="item.cod_atracao_categoria"
                    >{{item.nome}}</option>
                  </select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group>
              <label for="descricao">Descrição</label>
              <b-form-textarea
                type="text"
                id="descricao"
                v-model="atracao.descricao"
                rows="10"
                name="descricao"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-form-group>
              <label for="endereco">Endereço</label>
              <b-form-input type="text" id="endereco" name="endereco" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="inicio">Data de início</label>
                  <b-form-input type="date" id="inicio" name="data_inicio"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="final">Data de encerramento</label>
                  <b-form-input type="date" id="final" name="data_fim"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="lat">Lat</label>
                  <b-form-input type="text" id="lat" name="lat" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for="lng">Lng</label>
                  <b-form-input type="text" id="lng" name="lng" required></b-form-input>
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
                <b-button type="submit" size="sm" variant="primary">
                  <i class="fa fa-dot-circle-o"></i> Salvar
                </b-button>
              </b-col>
            </b-row>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from "../../../helpers/integracao";

export default {
  name: "nova_atracao",
  data() {
    return {
      atracao: {
        descricao: null
      },
      categorias: null
    };
  },
  created() {
    this.buscaCategorias();
  },
  methods: {
    buscaCategorias() {
      api.setHeaders();
      let cat = api.getCategorias();

      cat.then(res => {
        this.categorias = res;
      });
    },
    salvaAtracao(e) {
      let values = {};

      e.currentTarget
        .querySelectorAll("input, textarea, select")
        .forEach(elm => {
          if (elm.type == "date" && elm.value) {
            values[elm.name] = elm.value + " 00:00:00";
          } else {
            values[elm.name] = elm.value;
          }
        });

      api.setHeaders("POST", values);

      if (api.salvaAtracao()) {
        alert("Salvo com sucesso!");
        this.$router.push("/atracoes");
      }
    }
  }
};
</script>
