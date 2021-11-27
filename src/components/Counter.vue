<template>
  <h1>{{ num }}</h1>
  <h2>{{ twiceNum }}</h2>
  <button @click="plusNum"></button>
</template>

<script>
// import { db } from "../firebase";
// import {} from "firebase/firestore";

export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    plusNum: function () {
      this.num++;
    },
  },
  computed: {
    twiceNum: function () {
      return this.num * 2;
    },
  },
};
</script>

<style></style>
