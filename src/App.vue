<template>
  <div id="app" :class="{correct: isCorrect} ">
    <ul class="numbers">
      <Number
        v-for="number in numbers"
        :key="number.digit"
        :digit="number.digit"
        :color="number.color"
      />
    </ul>
    <ul class="numbers">
      <Number
        v-for="result in results"
        :key="result.digit"
        :digit="result.digit"
        :color="result.color"
      />
    </ul>
  </div>
</template>

<script>
import Number from "./components/Number.vue";
import * as helpers from "./utils/helpers.js";

export default {
  name: "App",
  components: {
    Number,
  },
  data() {
    return {
      numbers: [
        { digit: 1, color: "green", key: "ArrowLeft" },
        { digit: 2, color: "blue", key: "ArrowUp" },
        { digit: 3, color: "red", key: "ArrowDown" },
        { digit: 4, color: "yellow", key: "ArrowRight" },
      ],
      results: [],
      isCorrect: false
    };
  },
  mounted() {
    // generate numbers for the first time
    this.generateNumbers();
    // listening to the keyup event which equals a makey makey action
    window.addEventListener("keyup", (e) => {
      const selectedItem = this.numbers.find((number) => number.key === e.key);
      if(selectedItem && this.results.indexOf(selectedItem) === -1){
        this.results.push(selectedItem);
      }

      // check for win or loose
      if(this.results.length === 4){
        const correct = this.numbers.map(item => parseInt(item.digit)).sort((a,b) => a -b).join(' ');
        const order = this.results.map(item => parseInt(item.digit)).join(' ');
        console.log(correct);
        console.log(order);
        this.isCorrect = correct === order;
        
        console.log(this.isCorrect);
      }
    });
  },
  methods: {
    generateNumbers() {
      const generated = helpers.generateRandomNumbers(1, 20);
      this.numbers.forEach((number, i) => {
        number.digit = generated[i];
      });
    },
  },
};
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/styles/style.css";
</style>
