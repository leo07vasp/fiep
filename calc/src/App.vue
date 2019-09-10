<template>
  <div id="app">
    <h1>Calculadora online</h1>

    <div class="container calc-online">
      <div class="row">
        <div class="col-5 history">
          <h6>Historico</h6>
          <ul class="history-box">
            <li>
              4+5 = 2
              <a href="#remove">
                <i class="fas fa-trash"></i>
              </a>
            </li>
             <li>
              4+5 = 2
              <a href="#remove">
                <i class="fas fa-trash"></i>
              </a>
            </li>
             <li>
              4+5 = 2
              <a href="#remove">
                <i class="fas fa-trash"></i>
              </a>
            </li>
             <li>
              4+5 = 2
              <a href="#remove">
                <i class="fas fa-trash"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-7 calc-main">
          <div class="container">
            <div class="row">
              <input class="col values" type="number" />
            </div>
            <div class="row">
              <div class="col-3"></div>
              <div class="col-3"></div>
              <div class="col-3">
                <a class="bt-calc ac" href="#">AC</a>
              </div>
              <div class="col-3">
                <a class="bt-calc action" href="#">
                  <i class="fas fa-divide"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a class="bt-calc number" href="#">7</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">8</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">9</a>
              </div>
              <div class="col-3">
                <a class="bt-calc action" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a class="bt-calc number" href="#">4</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">5</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">6</a>
              </div>
              <div class="col-3">
                <a class="bt-calc action" href="#">
                  <i class="fas fa-minus"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <a class="bt-calc number" href="#">3</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">2</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">1</a>
              </div>
              <div class="col-3">
                <a class="bt-calc action" href="#">
                  <i class="fas fa-plus"></i>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <a class="bt-calc plus number" href="#">0</a>
              </div>
              <div class="col-3">
                <a class="bt-calc number" href="#">,</a>
              </div>
              <div class="col-3">
                <a class="bt-calc action" href="#">
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
  name: "app"
};
</script>

