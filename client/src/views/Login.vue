<template>
  <section id="login">
    <form @submit.prevent="login" method="POST">
      <input type="email" class="form-control" placeholder="E-mail" name="email" required />
      <input type="password" class="form-control" placeholder="Password" name="senha" required />
      <button type="submit" class="btn">Entrar</button>
    </form>
  </section>
</template>
<script>
import api from "@/utils/integracao";
export default {
  name: "Login",
  data() {
    return {
      user: null,
      pass: null
    };
  },
  methods: {
    login(e) {
      let values = {},
        res = null;

      e.currentTarget.querySelectorAll("input").forEach(elm => {
        values[elm.name] = elm.value;
      });

      api.setHeaders("POST", values, true);

      res = api.login();

      res.then(r => {
        if (r) {
          if (r.token) {
            api.token = r.token;

            localStorage.setItem("epp_usr_tk", r.token);
            localStorage.setItem("epp_usr_name", r.nome);
            localStorage.setItem("epp_usr_email", r.email);
            localStorage.setItem("epp_usr_cod", r.codigo);

            this.$router.push("/");
          } else {
            alert(r.msg);
          }
        }
      });
    }
  }
};
</script>


<style lang="stylus">
@import '../assets/stylus/login.styl';
</style>

