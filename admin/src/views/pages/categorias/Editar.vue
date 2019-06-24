<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8">
        <b-card>
          <form
            action
            @submit.prevent="atualizaCategoria"
            method="post"
            enctype="multipart/form-data"
          >
            <div slot="header">
              <strong>Editar Categoria</strong>
            </div>
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <label for="nome">Nome</label>
                  <b-form-input
                    type="text"
                    id="nome"
                    name="nome"
                    :value="categoria.nome"
                    v-model="categoria.nome"
                  ></b-form-input>
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
  name: "editar categoria",
  data() {
    return {
      categoria: null
    };
  },
  created() {
    this.buscaCategoria();
  },
  methods: {
    buscaCategoria() {
      api.setHeaders();
      let id = this.$route.params.id,
        cat = api.getCategoria(id);

      cat.then(res => {
        this.categoria = res;
      });
    },
    atualizaCategoria(e) {
      let values = {};

      e.currentTarget
        .querySelectorAll("input, textarea, select")
        .forEach(elm => {
          values[elm.name] = elm.value;
        });

      api.setHeaders("PUT", values);
      if( api.updateCategoria(this.$route.params.id) ) {          
          this.$router.push('/categorias');
      }
    }
  }
};
</script>
