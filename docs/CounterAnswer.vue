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
    // ここでVue2だったらdataのものを宣言する
    const num = ref(0);

    // ここでVue2だったらmethodsのものを宣言する
    const plusButton = () => {
      num.value++;
    };

    // ここでVue2だったらcomputedのものを宣言している;
    const twiceNum = computed(() => {
      return num.value * 2;
    });
    // setup関数の返り値として返したものがtemplete内で使える
    return {
      counter,
      plusButton,
      twiceNum,
    };
  },
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
