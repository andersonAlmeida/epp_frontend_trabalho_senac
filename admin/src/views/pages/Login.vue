<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <form @submit.prevent="login" method="POST">
                  <h1>Login</h1>
                  <p class="text-muted">Acessar área administrativa</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="email"
                      class="form-control"
                      placeholder="E-mail"
                      name="email"
                      required
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="senha"
                      required
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" type="submit">Entrar</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import api from "../../helpers/integracao";

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
          api.token = r.token;
          
          localStorage.setItem("epp_adm_tk", r.token);
          localStorage.setItem("epp_adm_name", r.nome);
          localStorage.setItem("epp_adm_email", r.email);

                    
          this.$router.push("/atracoes");
        }
      });
    }
  }
};
</script>
