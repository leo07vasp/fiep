<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">TESTE</a>
    </nav>

    <div class="container main-ecommerce">
      <div class="row">
        <div id="filtro-box" class="col-md-3 mt-5">
          <h5>Filtros</h5>

          <div class="col pt-3">
            <h6>Filtros aplicados</h6>
            <div class="filtros-aplicados">
              <span v-for="(preco, index) in precos" :key="index" class="tag">
                {{preco.min ? 'min:' : ''}} {{preco.min ? preco.min : ''}}
                {{preco.min && preco.max ? '~' : ''}}
                {{preco.max ? 'max:' : ''}} {{preco.max ? preco.max : ''}}
                <a
                  v-on:click="removePreco(preco)"
                  href="#"
                >X</a>
              </span>

              <span
                v-bind:key="'marcas' + index"
                v-for="(marca, index) in marcasFiltradas"
                class="tag"
              >
                {{marca}}
                <!-- <a href="#">X</a> -->
              </span>
            </div>
          </div>

          <div class="col pt-3">
            <h6>Preço</h6>

            <ul>
              <li>
                <a v-on:click="aplicarFiltroPreco({min: 0, max : 10})" href="#">Até $10</a>
              </li>
              <li>
                <a v-on:click="aplicarFiltroPreco({min : 10, max: 20})" href="#">$10 ~ $20</a>
              </li>
              <li>
                <a v-on:click="aplicarFiltroPreco({min: 20,max : 30})" href="#">$20 ~ $30</a>
              </li>
              <li>
                <a v-on:click="aplicarFiltroPreco({min: 30, max :99999})" href="#">Mais de $30</a>
              </li>
            </ul>

            <form>
              <div class="row">
                <div class="col pr-2 pl-2">
                  <input type="text" class="form-control" placeholder="Min" />
                </div>-
                <div class="col pl-2 pr-2">
                  <input type="text" class="form-control" placeholder="Max" />
                </div>
                <div class="col p-0">
                  <button type="button" class="btn btn-secondary">></button>
                </div>
              </div>
            </form>
          </div>

          <div class="col pt-3">
            <h6>Marcas</h6>

            <div
              v-bind:key="'check' + index"
              v-for="(marca, index) in marcas"
              class="custom-control custom-checkbox"
            >
              <input
                v-model="marcasFiltradas"
                type="checkbox"
                :value="marca"
                class="custom-control-input"
                :id="`customCheck${index}`"
              />
              <label class="custom-control-label" :for="`customCheck${index}`">{{marca}}</label>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 row m-0 mt-5">
          <div
            v-bind:key="'item' + index"
            v-for="(item, index) in Filtrados"
            class="col-lg-4 col-md-6 col-sm-1 product-item"
          >
            <div class="item-box">
              <img
                class="img-fluid"
                :src="require(`@/assets/img/${item.filename}`)"
                :alt="item.title"
              />
              <p
                class="desc"
              >{{item.description.length > 60 ? item.description.substring(1, 57) + '...' : item.description}}</p>

              <Stars :qty="item.qtyrating" :msg="item.rating" />
              <p>{{item.brand}}</p>
              <p class="price">
                <b>${{item.price}}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./components/Stars.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    Stars
  },
  data() {
    return {
      produtos: [],
      marcas: [],
      marcasFiltradas: [],
      precos: []
    };
  },
  created() {
    this.getJson();
  },
  computed: {
    Filtrados() {
      if (this.precos.length) {
        return this.produtos.filter(item => {
          return this.marcasFiltradas.length
            ? this.marcasFiltradas.includes(item.brand) &&
                parseFloat(item.price) < parseFloat(this.precos[0].max) &&
                parseFloat(item.price) > parseFloat(this.precos[0].min)
            : item;
        });
      } else {
        return this.produtos.filter(item => {
          return this.marcasFiltradas.length
            ? this.marcasFiltradas.includes(item.brand)
            : item;
        });
      }
    }
  },
  methods: {
    removePreco(preco) {
      if (event) event.preventDefault();
      this.precos = [];
    },

    aplicarFiltroPreco(faixa) {
      if (event) event.preventDefault();
      this.precos = [faixa];
    },

    getJson() {
      axios.get("/products.json").then(response => {
        this.produtos = response.data;
        this.marcas = response.data
          .map(item => item.brand)
          .filter((value, index, self) => self.indexOf(value) === index);
      });
    }
  }
};
</script>


