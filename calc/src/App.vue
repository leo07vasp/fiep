<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="container pb-calc-container">
      <div class="row">
        <div class="col-md-3 col-md-offset-5">
          <div class="panel panel-info">
            <div class="panel-heading">
              <label>Simple Calculator</label>
            </div>
            <div class="panel-body pb-calc-panel-body">
              <input type="text" class="form-control" placeholder="2 + 2 = 4" />

              <hr class="pb-calc-hr" />
              <div class="row">
                <div class="col-md-12">
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-percent"></span>
                      </button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-check"></span>
                      </button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-superscript"></span>
                      </button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-arrows"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="background: #b3ffff;">
                <div class="col-md-12">
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">CE</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">C</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-arrow-circle-o-left"></span>
                      </button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <strong>/</strong>
                      </button>
                    </div>
                  </div>
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">7</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">8</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">9</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-times fa-lg"></span>
                      </button>
                    </div>
                  </div>
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">4</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">5</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">6</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-minus"></span>
                      </button>
                    </div>
                  </div>
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">1</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">2</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">3</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-plus"></span>
                      </button>
                    </div>
                  </div>
                  <div class="row" style="padding-bottom: 5px;">
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <span class="fa fa-calculator"></span>
                      </button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">0</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">,</button>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3">
                      <button class="btn pb-calc-btn">
                        <strong>=</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
