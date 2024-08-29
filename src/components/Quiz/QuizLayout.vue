<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";

  import {provide} from "vue";

  defineProps({quiz: Object});

  provide('key','oui');

</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz"/>
</template>

<style scoped>

</style>