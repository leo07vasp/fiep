<template>
  <div>
    <p v-if="msg === 0">
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      ({{qty}})
    </p>

    <p v-if="msg === 1">
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      ({{qty}})
    </p>

    <p v-if="msg === 2">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      ({{qty}})
    </p>

    <p v-if="msg === 3">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      ({{qty}})
    </p>

    <p v-if="msg === 4">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      ({{qty}})
    </p>

    <p v-if="msg === 5">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      {{qty}}
    </p>

    <button v-on:click="myFunction()">teste</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: Number,
    qty: Number
  },
  methods: {
    myFunction() {
      this.$emit("hahaha");
    }
  }
};
</script>

