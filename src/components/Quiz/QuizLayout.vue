<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";

  import {provide, ref} from "vue";

  defineProps({quiz: Object});

  let name = ref('john Doe');

  provide('name',{
    name,
    changeName: () => name.value = 'Changed'
  });

</script>

<template>
  <h1>{{name}}</h1>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz"/>
</template>

<style scoped>

</style>