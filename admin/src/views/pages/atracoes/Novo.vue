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
					<b-form-select id="categoria" 
						:plain="false"
                  		:options="[1,2,3,4,5,6,7,8,9,10,11,12]"></b-form-select>
				</b-form-group>
			</b-col>
		  </b-row>
          <b-form-group>
            <label for="descricao">Descrição</label>
            <b-form-textarea type="text" id="descricao"></b-form-textarea>
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
			  	<b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
			  </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "nova_atracao",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true
    };
  },
  methods: {
    click() {
      console.log('salva a nova atração');
    }
  }
};
</script>
