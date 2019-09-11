<template>
  <div id="app">
    <h1>Calculadora online</h1>

    <div class="container calc-online">
      <div class="row">
        <div class="col-5 history">
          <h6>Historico</h6>
          <ul class="history-box">
            <li v-bind:key="index" v-for="(item, index) in lastCounts">
              {{item.toString() }}
              <a v-on:click="removerItem(index)" href="#remove">
                <i class="fas fa-trash"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-7 calc-main">
          <div class="container">
            <div class="row">
              <div
                v-bind:class="{ 'fz2': String(valorCorrente).length > 11 , 'fz1': String(valorCorrente).length > 17  }"
                class="displayValue col values"
              >{{valorCorrente || '0'}}</div>
            </div>
            <div class="row">
              <div class="col-3"></div>
              <div class="col-3"></div>
              <div class="col-3">
                <a v-on:click.prevent.self="limpar()" class="bt-calc ac" href="#">AC</a>
              </div>
              <div class="col-3">
                <a v-on:click="addOperador('/')" class="bt-calc action" href="#">
                  <i class="fas fa-divide"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('7')" class="bt-calc number" href="#">7</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('8')" class="bt-calc number" href="#">8</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('9')" class="bt-calc number" href="#">9</a>
              </div>
              <div class="col-3">
                <a v-on:click="addOperador('*')" class="bt-calc action" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('4')" class="bt-calc number" href="#">4</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('5')" class="bt-calc number" href="#">5</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('6')" class="bt-calc number" href="#">6</a>
              </div>
              <div class="col-3">
                <a v-on:click="addOperador('-')" class="bt-calc action" href="#">
                  <i class="fas fa-minus"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('3')" class="bt-calc number" href="#">3</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('2')" class="bt-calc number" href="#">2</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="addNumber('1')" class="bt-calc number" href="#">1</a>
              </div>
              <div class="col-3">
                <a v-on:click="addOperador('+')" class="bt-calc action" href="#">
                  <i class="fas fa-plus"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <a v-on:click.prevent.self="addNumber('0')" class="bt-calc plus number" href="#">0</a>
              </div>
              <div class="col-3">
                <a v-on:click.prevent.self="point()" class="bt-calc number" href="#">.</a>
              </div>
              <div class="col-3">
                <a v-on:click="resultado()" class="bt-calc action" href="#">
                  <i class="fas fa-equals"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      valorCorrente: "",
      lastCounts: []
    };
  },
  methods: {
    limpar() {
      this.valorCorrente = "";
    },
    addNumber(numero) {
      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },
    point() {
      if (event) event.preventDefault();
      this.addNumber(".");
    },
    addOperador(operador) {
      if (event) event.preventDefault();
      this.valorCorrente = `${this.valorCorrente}${operador}`;
    },
    removerItem(index) {
      if (event) event.preventDefault();
      this.lastCounts.splice(index, 1);
    },
    resultado() {
      if (event) event.preventDefault();
      this.lastCounts.push([
        this.valorCorrente + "=" + parseFloat(eval(this.valorCorrente))
      ]);
      this.valorCorrente = parseFloat(eval(this.valorCorrente));
    }
  }
};
</script>



