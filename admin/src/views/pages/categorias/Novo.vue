<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8">
        <b-card>
          <form
            action
            @submit.prevent="salvaCategoria"
            method="post"
            enctype="multipart/form-data"
          >
            <div slot="header">
              <strong>Nova Categoria</strong>
            </div>
            <b-row>
              <b-col sm="6">
                <b-form-group>
                  <label for="nome">Nome</label>
                  <b-form-input
                    type="text"
                    id="nome"
                    name="nome"
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
  name: "nova_categoria",
  data() {
    return {
      categoria: null
    };
  },
  methods: {
    salvaCategoria(e) {
      let values = {};

      e.currentTarget
        .querySelectorAll("input")
        .forEach(elm => {
            values[elm.name] = elm.value;
        });

      api.setHeaders("POST", values);

      if (api.salvaCategoria()) {
        alert("Salvo com sucesso!");
        this.$router.push("/categorias");
      }
    }
  }
};
</script>
