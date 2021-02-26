<template>
    <li class="numbers__item" :class="color">{{digit}}</li>
</template>

<script>
export default {
  name: 'Number',
  props: {
    digit: Number,
    color: String
  }
}
</script>