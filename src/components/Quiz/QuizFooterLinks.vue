<script setup>
  import {state} from "@/Stores/quizStore.js";

</script>

<template>
  <div>{{state.name}}</div>
  <button @click.prevent="state.name = 'some new name'">Change Quiz name</button>
  <ul>
    <li><a href="#">Get a job</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
</template>

<style scoped>

</style>