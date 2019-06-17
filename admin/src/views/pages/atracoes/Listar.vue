<template>
  <div class="animated fadeIn">
    <h2>Atrações</h2>
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
                  <th>Categoria</th>
                  <th>Editar</th>
                </thead>
                <tbody>
                  <tr v-bind="items" v-for="item in items">
                    <td>{{item ? item.nome : ''}}</td>
                    <td>{{item ? item.categoria.nome : ''}}</td>
                    <td>                      
                      <router-link :to="{ name: 'Editar atração', params: {id: item.cod_atracao}}" class="btn btn-primary"><i class="fa fa-pencil"></i></router-link>
                      <button class="btn btn-danger">
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
    <!--/.row-->
  </div>
</template>

<script>
// import cTable from '../../base/Table'
import { getAtracoes, getData } from "../../../helpers/integracao";

export default {
  name: "atracoes",
  data: () => {
    return {
      items: null
    };
  },
  created() {
    this.buscaAtracoes();
  },
  methods: {
    buscaAtracoes() {
      let atracoes = getAtracoes();

      atracoes.then(res => {
        this.items = res;
      });
    }
  }
};
</script>
