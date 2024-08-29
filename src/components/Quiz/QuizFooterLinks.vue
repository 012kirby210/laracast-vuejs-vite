<script setup>
  import {inject} from "vue";

  let key = inject('key');

  defineProps({quiz: Object});


</script>

<template>
  <div>{{quiz.name}}</div>
  <div>{{key}}</div>

  <ul>
    <li><a href="#">Get a job</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
</template>

<style scoped>

</style>