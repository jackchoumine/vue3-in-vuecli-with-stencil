<template>
  <div class="app">
    <TestStencil />
    <HelloWorld />
  </div>
</template>

<script>
import TestStencil from "./components/TestStencil.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TestStencil,
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
