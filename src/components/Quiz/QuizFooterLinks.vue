<script setup>
  import {inject} from "vue";

  let name = inject('name');

  defineProps({quiz: Object});

</script>

<template>
  <div>{{quiz.name}}</div>
  <div>{{name.name}}</div>
  <button @click.prevent="name.changeName">change name</button>

  <ul>
    <li><a href="#">Get a job</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
</template>

<style scoped>

</style>