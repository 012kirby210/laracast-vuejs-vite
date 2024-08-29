<script setup>
  // import TabbableTextarea from "@/components/TabbableTextarea.vue";
  // import {ref} from "vue";
  import QuizLayout from "@/components/Quiz/QuizLayout.vue";

  // let comment = ref("test value");
</script>


<template>
  <main>
    <form>
<!--      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />-->
    <QuizLayout :quiz="{name: 'My First Quiz', questions: []}" />
    </form>
  </main>
</template>
