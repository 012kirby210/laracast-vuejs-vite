<script setup>
// import flash from '@/mixins/flash';
import {useCounterStore} from '@/Stores/CounterStore.js'

let counter = useCounterStore();

// export default {
//   mixins: [flash]
// }
</script>

<template>
  <div>
    <p>The current counter is {{ counter.count }}</p>
<!--    <button @click="flash('It works')">Click me</button>-->
  </div>
</template>
