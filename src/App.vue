<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ counter }}</h1>
  <h2>{{ twiceNum }}</h2>
  <button @click="plusButton"></button>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  setup() {
    const counter = ref(0);
    const plusButton = () => {
      counter.value++;
    };
    const twiceNum = computed(() => {
      return counter.value * 2;
    });
    return {
      counter,
      plusButton,
      twiceNum,
    };
  },
  // computed: {
  //   twiceNum: function () {
  //     return this.counter * 2;
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
