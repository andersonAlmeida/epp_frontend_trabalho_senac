<template>
  <div class="animated fadeIn">
    <h2>Categorias</h2>
    <b-row>
      <b-col lg="12">
        <div class="card">
          <div class="card-header">
            <div>
              <i class="fa fa-align-justify"></i> Striped Table
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive-sm">
              <table class="table b-table table-striped">
                <thead>
                  <th>Nome</th>
                  <th>Editar</th>
                </thead>
                <tbody>
                  <tr v-bind="items" v-for="item in items">
                    <td>{{item ? item.nome : ''}}</td>
                    <td>
                      <router-link
                        :to="{ name: 'Editar categoria', params: {id: item.cod_atracao_categoria}}"
                        class="btn btn-primary"
                      >
                        <i class="fa fa-pencil"></i>
                      </router-link>
                      <button
                        class="btn btn-danger"
                        :id="item.cod_atracao_categoria"
                        @click="removeCategoria"
                      >
                        <i class="fa fa-close"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from "../../../helpers/integracao";

export default {
  name: "categorias",
  data: () => {
    return {
      items: null
    };
  },
  created() {
    this.buscaCategorias();
  },
  methods: {
    buscaCategorias() {
      api.setHeaders();
      let categorias = api.getCategorias();

      categorias.then(res => {
        this.items = res;
      });
    },

    removeCategoria(e) {
      if (confirm("Você tem certeza que deseja excluir está categoria?")) {
        api.setHeaders("DELETE");
		api.deletaCategoria(e.currentTarget.id);
		location.reload();
        // this.$router.go({
        //   path: "/categorias",
        //   force: true
        // });
      }
    }
  }
};
</script>
