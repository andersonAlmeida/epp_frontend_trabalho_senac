<template>
  <div class="animated fadeIn">
    <h2>Atrações</h2>
    <b-row>
      <b-col lg="12">
        <c-table :table-data="items" :per-page=10 striped caption="<i class='fa fa-align-justify'></i>"></c-table>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from '../../base/Table'

const someData = () => [
  {nome: 'Samppa Nori', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>', _rowVariant: 'success'},
  {nome: 'Estavan Lykos', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>', _rowVariant: 'danger'},
  {nome: 'Chetan Mohamed', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>', _rowVariant: 'info'},
  {nome: 'Derick Maximinus', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Friderik Dávid', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Yiorgos Avraamu', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Avram Tarasios', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Quintin Ed', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Enéas Kwadwo', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Agapetus Tadeáš', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Carwyn Fachtna', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Nehemiah Tatius', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Ebbe Gemariah', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Eustorgios Amulius', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Leopold Gáspár', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Pompeius René', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Paĉjo Jadon', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Micheal Mercurius', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Ganesha Dubhghall', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Hiroto Šimun', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Vishnu Serghei', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Zbyněk Phoibos', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Einar Randall', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Félix Troels', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'},
  {nome: 'Aulus Agmundr', categoria: 'Parques', codigo: 1, html: '<button>Editar</button>'}
]

export default {
  name: 'atracoes',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'Nome', label: 'Atração'},
        {key: 'Categoria'},
        {key: 'Editar'}        
      ],
    }
  }
}
</script>
