<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";

  import {state} from "@/Stores/quizStore.js";
</script>

<template>
  <h1>{{state.name}}</h1>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter/>
</template>

<style scoped>

</style>