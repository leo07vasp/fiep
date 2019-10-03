
<template>
  <form v-on:submit="handleSubmit()" id="form" class="form-signin">
    <h2>Acesse sua conta</h2>
    <p></p>

    <div v-if="success.length" class="alert alert-danger" role="success">{{success.toString()}}</div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        v-model="email"
        name="email"
        v-bind:class="{ 'is-invalid': attemptSubmit && missEmail }"
        class="form-control was-validated"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Email"
      />
      <div class="invalid-feedback">Inform um e-mail valido.</div>
    </div>

    <div class="form-group">
      <label for="password">Senha</label>
      <input
        name="password"
        v-model="password"
        type="password"
        v-bind:class="{ 'is-invalid': attemptSubmit && missPass }"
        class="form-control was-validated"
        id="password"
        placeholder="Senha"
      />
      <div class="invalid-feedback">campo obrigatório.</div>
    </div>

    <div class="container mt-3">
      <div class="row">
        <div class="col-sm pl-0 mt-4">
          <a class="text-secondary" href="#esqueci-minhasenha">Esqueci minha senha</a>
        </div>

        <div class="col-sm pr-0 mt-4">
          <button class="btn btn-lg btn-secondary btn-block" type="submit">Acessar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      email: "",
      password: "",
      success: [],
      attemptSubmit: false
    };
  },
  computed: {
    missEmail: function() {
      return this.email === "" || !this.validEmail(this.email);
    },
    missPass: function() {
      return this.password === "";
    }
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    handleSubmit() {
      this.attemptSubmit = true;
      if (this.missEmail || this.missPass) {
        event.preventDefault();
      } else {
        this.success = ["Dados de acesso incorretos"];
      }
      event.preventDefault();
    }
  }
};
</script>

