<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img src="img/avatars/6.jpg" class="img-avatar" alt="user image">
      <p>Olá {{this.nome}}</p>
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center">
        <strong>Conta</strong>
      </b-dropdown-header>
      <b-dropdown-item @click.prevent="logout">
        <i class="fa fa-lock"/> Logout
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";
export default {
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      nome: localStorage.getItem("epp_adm_name"),
      email: localStorage.getItem("epp_adm_email")
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("epp_adm_tk");
      localStorage.removeItem("epp_adm_name");
      localStorage.removeItem("epp_adm_email");
      this.$router.push("/login");
    }
  }
};
</script>
