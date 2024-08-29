<script setup>
  import {inject} from "vue";

  let quiz = inject('quiz');

</script>

<template>
  <div>{{quiz.name}}</div>
  <ul>
    <li><a href="#">Get a job</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
</template>

<style scoped>

</style>