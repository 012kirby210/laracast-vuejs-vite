<script setup>
  import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks.vue";

  defineProps({quiz: Object});
</script>

<template>
  <p>Quiz Footer</p>
  <QuizFooterLinks :quiz="quiz" />
</template>

<style scoped>

</style>