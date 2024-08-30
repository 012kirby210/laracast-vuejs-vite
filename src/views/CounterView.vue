<script setup>
  import {useCounterStore} from "@/Stores/CounterStore.js";

  let counter = useCounterStore();
</script>

<template>
  <div>
    <p>
      {{ counter.count }}
    </p>
    <button @click="counter.increment()"
      :disabled="! counter.remaining"
    >Increment {{counter.remaining}} remaining</button>

  </div>
</template>

<style scoped>

</style>