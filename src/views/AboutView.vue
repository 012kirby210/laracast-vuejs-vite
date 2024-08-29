<script>
import flash from '@/mixins/flash';

export default {
  mixins: [flash]
}
</script>

<template>
  <div>
    <button @click="flash('It works')">Click me</button>
  </div>
</template>
