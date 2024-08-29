<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";


  defineProps({quiz: Object});
</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz"/>
</template>

<style scoped>

</style>